import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

// ESTA ES LA PLANTILLA/TEMPLATE PARA TODAS LAS PÁGINAS contiene el menu + el componente que quieras
const App = () => {
  return (
    <div>
        <MainHeader /> 
        <Outlet />
    </div>
  )
}

export default App