import axios from "axios"
import { API_URL } from "../../constants/env"
import { setToken, token } from "../../helpers/auth"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import LoginTemplate from "../templates/LoginTemplate"

const Login = () => {
    const nav = useNavigate() //Se utiliza para poder usas las redirecciones
    
    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
       setError()
        const data = {
            email:e.target.email.value,
            password:e.target.password.value
        }

        axios.post(`${API_URL}/login`, data)
        .then(resp => {
            
             setToken(resp.data.accessToken)
              if(resp.data.user.role === "admin"){
                 nav("/admin/products/add")
              }else if(resp.data.user.role === "waiter"){
                 nav("/products")
              }
            
        })
        .catch((err) => {
            setError(err)
        })
    }

  return (
   <LoginTemplate title="Iniciar sesión">
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Correo electronico" required/>
            <input type="password" name="password" placeholder="Contraseña" required/>
            <button type="submit">Ingresar</button>
            <Link className="text-gray-500" to="/register">
                ¿Deseas Registrarte?
            </Link>
           {error && (
                <p className="text-center p-2 bg-red-100 text-red-800" >
                 {error.response.data}
                </p>
                )}
        </form>
   </LoginTemplate>
    
  )
}

export default Login