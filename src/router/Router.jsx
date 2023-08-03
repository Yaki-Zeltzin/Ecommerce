import {createBrowserRouter} from "react-router-dom"
import Home from "../components/pages/Home"
import Error404 from "../components/pages/Error404"
import Products from "../components/pages/Products"
import App from "../components/templates/App"
import Login from "../components/pages/Login"

//Cada ruta es un objeto dentro de este array
//Se renderiza en raiz App ya que es el template con el menu
//index es un boleano que le indica que es la raiz y retorna el elemento Home
//children es el componente que viene desde Outlet
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />,
            }
        ]
    },
    {
        path:"/login",
        element: <Login />
    }   
])

export default router