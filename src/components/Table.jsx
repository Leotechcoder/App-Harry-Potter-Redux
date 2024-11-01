
import Loader from "./Loader"
import Tablerow from "./Tablerow"
import { useSelector } from "react-redux"


const Table = () => {

const personajes = useSelector((store)=>store.personajes.Characters)

const error = useSelector((store)=>store.personajes.error)

const loading = useSelector(state => state.personajes.loading)


  return (
  
  <>
   {loading && <Loader/>}
      {error ? <p>Hubo en error al compilar los datos</p> : 
    
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Casa</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            
            <tbody> 

                    {
                    personajes.length >=0 ? 
                    personajes.map((personaje)=>{
                             return(
                                    <Tablerow key={personaje.id} personaje={personaje}/>
                                    )
                            }):
                      <tr>
                        <td colSpan="4">No hay personajes</td>
                      </tr>
                    }
    
            </tbody> 
        </table>}
            
            
            </>
    
    
  )
}

export default Table
