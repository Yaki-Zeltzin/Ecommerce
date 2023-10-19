import { Link } from "react-router-dom"

const AdminMenu = () => {

  return (
        <nav className="w-full">
            <ul className="flex justify-end text-gray-100">
                <li className="flex items-center">
                    <Link className="menu-item" to="/products">
                        Productos
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link className="menu-item" to="/">
                        Volver a la App
                    </Link>
                </li>
            </ul>
        </nav>

  )
}

export default AdminMenu