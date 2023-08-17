import useFetch from "../../hooks/useFetch"

const Table = () => {

 const { data, error, loading } = useFetch("products", headers={
  'Authorization': `Bearer ${localStorage.getItem('tokenUser')}`,
}, )

 if(loading) return <h1>CARGANDO...</h1>
 if(error) return <h1>Error en la petición productos</h1>

  return (
    <div>
        <h1>Products</h1>
       {
        data.length === 0 ? (<p>No existen productos</p>) : 
        data.map(prod => (
          <div key={prod.id}>{prod}</div>
        ))
       }
        
    </div>
  )
}

export default Table



