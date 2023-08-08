import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

// ESTA ES LA PLANTILLA/TEMPLATE PARA TODAS LAS PÁGINAS contiene el menu + el componente que quieras
const App = () => {
  return (
    <div>
        <MainHeader /> 
        <div className="pt-16 max-w-200 m-auto"></div>
        <Outlet />
    </div>
  )
}

export default App