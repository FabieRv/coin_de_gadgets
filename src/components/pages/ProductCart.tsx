import { Link } from "react-router-dom"
import type { Product } from "../Types"

function ProductCart({ product }: { product: Product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden cursor-pointer">
        {/* IMAGE DU PRODUIT */}
        <div className="h-48 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* TEXTE */}
        <div className="p-4 bg-gray-50">
          <h2 className="text-lg font-Montser text-gray-800 my-4">
            {product.title.substring(0.25) + "..."}
          </h2>
          <p className="text-xs lg:text-sm text-gray-600 mt-2  items-center border-b-2 pb-4">
            {product.description.substring(0, 70) + "..."}
          </p>
          <div className="flex justify-between mt-4 itemes-center">
            <p className="font-bold">{product.price.toLocaleString()} Ar</p>
            <p>View Details</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCart
