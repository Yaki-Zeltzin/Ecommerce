import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { API_URL } from "../../constants/env"
import LoginTemplate from "../templates/LoginTemplate"

const Register = () => {
    const nav = useNavigate()

    const [error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            details: {
                fullname: e.target.fullname.value,
            },
        }

        axios
            .post(`${API_URL}/users`, data)
            .then(() => {
                nav("/login")
            })
            .catch((err) => {
                setError(err)
            })
    }

    return (
        <LoginTemplate title="Registrate">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Nombre Completo"
                    required />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    required />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    required />
                <button type="submit">Crear cuenta</button>
                <Link className="text-gray-500" to="/login">
                    ¿Ya tienes cuenta? Inicia sesión
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

export default Register