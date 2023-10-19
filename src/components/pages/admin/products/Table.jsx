import { useEffect, useState } from "react"
import axios from "axios"
import { token } from "../../../../helpers/auth"
import { API_URL, TOKEN_NAME } from "../../../../constants/env"
import { Link } from "react-router-dom"

const Table = () => {

  const [data, setData] = useState([])

  const deleteProduct = (product) => {
    if(window.confirm("Estas seguro que desear eliminar?")){
      axios.delete(`${API_URL}/products/${product.id}`, {
        headers:{
          Authorization: `Bearer ${token()}`,
        },
      })
      .then(() => alert('Producto eliminado'))
    }
  }

  useEffect(() => {
    axios.get(`${API_URL}/products`, {
      headers: {
        'Authorization': `Bearer ${token(TOKEN_NAME)}`,
      },
    })
      .then(resp => {
        setData(resp.data)
      })
      .catch(err => {
        setData(err)
      })
  }, [])


  return (
    <div>
      <h1 className="text-4xl mb-6">Products</h1>
      <Link className="bg-gradient button" to={"admin/products/add"}></Link>
      <table className="overflow-x-scroll">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>
                  <Link to={`edit/${prod.id}`}>Editar</Link>
                </td>
                <td>
                  <a className="text-red-600 hover:cursor-pointer" 
                    onClick={() => deleteProduct(prod)}
                    >
                      Eliminar
                  </a>
                </td>
              </tr>
          ))}
          <tr>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table



