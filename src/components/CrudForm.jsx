
import { useEffect, useState } from "react"
import Input from "./Input"
import { useDispatch, useSelector } from "react-redux"
import { createPersonaje, postPersonaje, putPersonaje } from '../Feature/Personajes/PersonajesSlice'
import { Toaster, toast } from "sonner"

const initialState = {
  id: null,
  nombre: "",
  casa: "",
}

const CrudForm = () => {

  //inicializo un state propio del componente
  const [form, setForm] = useState(initialState)
  const [editar, setEditar] = useState(false)

  //uso el useSelector para obtener el personaje a editar
  const editPersonaje = useSelector(store => store.personajes.Charactertoedit)
  const dispatch = useDispatch()

  //manejo el evento del formulario y cambio el state del formulario
  const handlesubmit = (e) => {
    e.preventDefault()
    if(editar){
      dispatch(createPersonaje(form))
      dispatch(putPersonaje(form))  
      console.log('editar')
      handleReseat()
      toast.success('Personaje editado correctamente')
    }else{
      dispatch(createPersonaje(form))
      dispatch(postPersonaje(form))
      handleReseat()
      toast.success('Personaje creado correctamente')
    }
    
  }

  //manejo el evento del input y cambio el state del formulario en función del nombre del input y su valor
  const handlechange = ({target:{ name , value}})=>{
   
    setForm({...form, [name]: value })
  }

  //manejo el evento de resetear el formulario y limpio el state del formulario
  const handleReseat = () => {
    setForm(initialState)
    setEditar(false)
  }
  
  //se ejecuta cada vez que el state del personaje a editar cambia, se resetea el formulario al estado inicial
  useEffect(() => {
    
    if(editPersonaje){
      setForm(editPersonaje)
      setEditar(true)
    } else {
      setForm(initialState)
    }
    
  }, [editPersonaje])
  

  

  return (
    <>
      <div className="container-fluid p-3 mt-3 d-flex justify-content-md-start bg-success-subtle">
        
        <form onSubmit={handlesubmit} className=" ms-4 w-auto">

              <h3>{editar ? 'Editar Personaje' : 'Cargar Personaje'}</h3> 
        
              <Input name='nombre' value={form.nombre} handlechange={handlechange}/>
              <Input name='casa' value={form.casa} handlechange={handlechange}/>
                    
              
              <div className="d-flex justify-content-center gap-2 my-3">
                <button type="submit" className="btn btn-outline-success w-50">Enviar</button>
                <button onClick={handleReseat} className="btn btn-danger w-50">Borrar</button>
              </div>
              <Toaster />
        </form>
        
        

      </div>
      
    </>
  )
}

export default CrudForm
