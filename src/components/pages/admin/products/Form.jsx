import axios from "axios"
import {API_URL} from "../../../../constants/env"         
import { token } from "../../../../helpers/auth"

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            name: e.target.name.value,
            price: Number(e.target.price.value),
            image: e.target.image.value,
            type: e.target.type.value
        }

        axios
         .post(`${API_URL}/products`, data, {//envia la data en la peticion post
            headers: {
                Authorization: `Bearer ${token()}`,
            },
         })
         .then((resp) => {
            console.log(resp)
            alert("Producto creado")
         })
         .catch(err => {
            console.log(err)
            alert("Error al crear productyo")
         })
    }

  return (
    <div className="login-container">
    <h1>Agregar producto</h1>
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Nombre producto</label>
        <input required
          type="text"
          name="name"
        />
      </div>
      <div className="field">
        <label htmlFor="price">Precio</label>
        <input required
          type="number"
          name="price"
        />
      </div>
      <div className="field">
        <label htmlFor="type">imagen</label>
        <input required
          type="url"
          name="image"
        />
      </div>
      <div className="field">
        <label htmlFor="type">Tipo</label>
        <input required
          type="text"
          name="type"
        />
      </div>
      <div className="submit">
        <button type="submit" className="button">Crear producto</button>
        {/* {error && (
          <p className="error" >
            {error.response.data}
          </p>
        )} */}
      </div>
    </form>

  </div>
  )
}

export default Form