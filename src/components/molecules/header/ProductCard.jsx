import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {

    const { image, id, type, name, price } = product

    return (
        <article className="w-full max-w-sm bg-white rounded-lg shadow-lg p-5">
      <div className="mb-5 rounded-lg overflow-hidden">
        <Link to={`/products/${id}`}>
          <img
            className="align-middle h-40 w-full object-cover"
            src={image}
            alt={name}
          />
        </Link>
      </div>
      <div className="mb-6">
        <Link to={`/products/${id}`}>
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
            {name}
          </h3>
        </Link>
        <p className="text-gray-500 line-clamp-2">{type}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-gray-900">
          {price}
        </span>
      </div>
    </article>
    )
}

export default ProductCard