
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import Inicio from './pages/Inicio'
import Casas from './pages/Casas'
import Error from './pages/Error'
import Personajes from './pages/Personajes'
import { PATH } from './routes/PATH'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPersonajes } from './Feature/Personajes/PersonajesSlice'

const router = createBrowserRouter([{
  path: '/',
    element: <RootLayout/>,
    errorElement: <Error/>,
    
    children:[ 
      { path: PATH.inicio, element: <Inicio/> }, 
      {path: PATH.personajes, element: <Personajes/> },
      { path: PATH.casas, element: <Casas/>},
        ]}

])



function App() {

  const dispatch = useDispatch()
 
//cuando inicializa el componente traigo la lista de personajes desde el servidor
  useEffect(() => {
    dispatch(getPersonajes())
  }, [dispatch])
  
  
  return (
    
      <RouterProvider router={router}/>
   
  )
}

export default App
