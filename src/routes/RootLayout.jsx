import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import './Rootlayout.css'


const RootLayout = () => {
  return (
    <>
      <section className='container-fluid vw-100 vh-100'>
        <div className='w-100  v-100 d-flex'>
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
        </div>
      </section>
    </>
  )
}

export default RootLayout
