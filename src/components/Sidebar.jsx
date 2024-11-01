import { NavLink } from "react-router-dom"
import { PATH } from "../routes/PATH"


const routes = [
    { path: PATH.inicio , name: 'Inicio'},
    { path: PATH.personajes, name: 'Personajes'},
    { path: PATH.casas, name: 'Casas' },
]


const Sidebar = () => {
  return (
    <>
      <div className="pt-4 w-100 vh-100">
        <nav className="nav flex-column py-2">
            {routes.map((route)=>{
                return(<NavLink 
                        key={route.name} 
                        to={route.path}
                        className={({isActive})=> 
                                isActive ? 'nav-link bg-primary text-white rounded-3 fw-bolder'
                                         : 'nav-link text-dark rounded-3'}
                                         >{route.name}</NavLink>)
                })}
        </nav>
      </div>
    </>
  )
}

export default Sidebar
