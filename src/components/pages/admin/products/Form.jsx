const Form = () => {
  return (
    <div className="login-container">
    <h1>Agregar producto</h1>
    <form >
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
        <button type="submit" className="button">Ingresar</button>
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