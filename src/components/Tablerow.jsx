

import { useDispatch } from 'react-redux';
import './cards.css'
import { deletePersonaje, removePersonaje } from '../Feature/Personajes/PersonajesSlice';
import { updatePersonaje } from '../Feature/Personajes/PersonajesSlice'
import { Toaster, toast } from 'sonner';

const Tablerow = ({personaje}) => {


const dispatch = useDispatch()

const { id, nombre , casa } = personaje;

  const handleDelete = ()=>{
    dispatch(deletePersonaje(id))
    dispatch(removePersonaje(personaje))
    console.log('borrar')
    toast('Personaje eliminado correctamente')
  }

  const handleEditar = ()=>{
    dispatch(updatePersonaje(id))
    console.log('editar')
  }

  return (
    <>
    
      <Toaster />
      <tr key={id} >
        
            <th scope="row"> {id} </th>
          
            <td> {nombre} </td>
            <td> {casa} </td>
            
            <td>
              <button onClick={handleEditar} className="btn btn-primary w-25 me-2">Editar</button>
              <button onClick={handleDelete} className="btn btn-danger w-25 me-2">Borrar</button>
            </td>
            

          </tr>
        
    </>
  )
}

export default Tablerow
