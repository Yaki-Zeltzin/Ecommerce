import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"
import AdminMenu from "../molecules/header/AdminMenu"

// ESTA ES LA PLANTILLA/TEMPLATE PARA TODAS LAS PÁGINAS contiene el menu + el componente que quieras
const Admin = () => {
  return (
    <div>
        <MainHeader> 
          <AdminMenu/>
        </MainHeader> 
        <div className="pt-16 max-w-200 m-auto">
          <Outlet />
        </div>
    </div>
  )
}

export default Admin