import axios from "axios"
import { API_URL } from "../../constants/env"
import { setToken } from "../../helpers/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            email: e.target.value,
            password: e.target.value
        }

        axios.post(`${API_URL}/login`, data)
        .then((resp) => {
            setToken(resp.data.accessToken)
            nav("/")
        })
        .catch((error) => {
            console.log(error)
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Correo electronico" required/>
            <input type="password" name="password" placeholder="Contraseña" required/>
            <button type="submit">Ingresar</button>
        </form>
    </div>
  )
}

export default Login