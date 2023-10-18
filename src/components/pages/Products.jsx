import { useEffect, useState } from "react"
import { API_URL, TOKEN_NAME } from "../../constants/env"
import { token } from "../../helpers/auth"
//import useFetch from "../../hooks/useFetch"
import axios from "axios"
import ProductCard from "../molecules/header/ProductCard"

const Products = () => {

  const [data, setData] = useState([])

useEffect(() => {
  axios.get(`${API_URL}/products`,{
    headers: {
      'Authorization': `Bearer ${token(TOKEN_NAME)}`,
    },
  })
  .then(resp => {
    setData(resp.data)
  })
  .catch(err => {
    console.log(err)
  })
}, [])


  return (
    <div>
        <h1>Products</h1>
        {data.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Products



