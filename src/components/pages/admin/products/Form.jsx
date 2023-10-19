import axios from "axios"
import {API_URL, TOKEN_NAME} from "../../../../constants/env"         
import { token } from "../../../../helpers/auth"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const Form = () => {

  const nav = useNavigate()
  const params = useParams()
  
  const [product, setProduct] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState()


  axios.get(`${API_URL}/products`, {
    headers: {
      'Authorization': `Bearer ${token(TOKEN_NAME)}`,
    },
  })

  useEffect(()=>{
    if(params.id) {
      setLoading(true)
      axios.get(`${API_URL}/products/${params.id}`, {
        headers: {
          'Authorization': `Bearer ${token(TOKEN_NAME)}`,
        },
      })
      .then((resp) => {
        setProduct(resp.data)
      })
      .catch(error => {
        setError(error)
      })
      .finally(()=> {
        setLoading(false)
      })
    }
  },[])


    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            name: e.target.name.value,
            price: Number(e.target.price.value),
            image: e.target.image.value,
            type: e.target.type.value
        }

    if(!params.id) {
      axios
      .post(`${API_URL}/products`, data, {//envia la data en la peticion post
         headers: {
             Authorization: `Bearer ${token()}`,
         },
      })
      .then(() => {
         nav("/admin/products")
      })
      .catch(err => {
         setError(err)
      },[])
    } else {
      axios
      .put(`${API_URL}/products/${params.id}`, data, {//envia la data en la peticion post
         headers: {
             Authorization: `Bearer ${token()}`,
         },
      })
      .then(() => {
         nav("/admin/products")
      })
      .catch(err => {
         setError(err)
      })
    }
    }

  return (
    <div className="login-container">
    <h1>
      {`${params.id ? "Editar" : "Crear"}`} producto
    </h1>
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Nombre producto</label>
        <input required
          type="text"
          name="name"
          defaultValue={product.name}
          
        />
      </div>
      <div className="field">
        <label htmlFor="price">Precio</label>
        <input required
          type="number"
          name="price"
          defaultValue={product.price}
        />
      </div>
      <div className="field">
        <label htmlFor="type">imagen</label>
        <input required
          type="url"
          name="image"
          defaultValue={product.image}
        />
      </div>
      <div className="field">
        <label htmlFor="type">Tipo</label>
        <input required
          type="text"
          name="type"
          defaultValue={product.type}
        />
      </div>
      <div className="submit">
        <button type="submit" className="button">Guardar</button>
      </div>
    </form>
  </div>
  )
}

export default Form