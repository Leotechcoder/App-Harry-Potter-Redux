
import { useSelector } from "react-redux"
import Cards from "../components/Cards"
import BtnCasas from "../components/BtnCasas"


const Casas = () => {

  const personajes = useSelector( state => state.personajes.Characters)
  const error = useSelector(state => state.personajes.error)

  return (
    <>
    
    {/*comento los cards luego los acomodare en otra carpeta */}
      {/* 
      {error ? <p>Hubo en error al compilar los datos</p> :
      
      <div className="container-fluid p-3 d-flex flex-wrap gap-2 bg-secondary-subtle my-3">
        {personajes.map((personaje)=>{
            return(
                    <Cards key={personaje.id} personaje={personaje}/>
                )
                })}

      </div>
      
      } */}

      <BtnCasas/>
      
    </>
  )
}

export default Casas
