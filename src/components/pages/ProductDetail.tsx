import { Link, useParams } from "react-router-dom"
import Container from "../common/Container"
import Button from "../common/Button"
import { ShoppingCart, Star } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/cart/cartSlice"

function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  const product = useSelector((state: any) =>
    state.product.items.find((p: any) => p.id === parseInt(id!))
  )

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-gray-600">
        <h2>Product not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Container>
        <Link
          to="/"
          className="mb-8 inline-block text-blue-600 hover:underline font-medium"
        >
          &larr; Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <div className="shadow-xl p-4 rounded w-full   bg-white mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="w-[20vh] lg:w-[48vh] h-auto object-contain rounded"
            />
          </div>

          <div className="flex flex-col gap-6 bg-white p-6 rounded-xl shadow-lg">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {product.title}
              </h1>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-5 h-5 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 text-sm">(120 reviews)</span>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
              <h3 className="bg-zinc-200 rounded-md w-[120px] p-1 text-black text-center mt-2">
                {product.category}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-2xl font-bold text-gray-900">
                Ar {product.price.toLocaleString()}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Button
                label="Add to Cart"
                className="bg-[#50B4B4] hover:bg-cyan-600 text-white flex justify-between items-center gap-2 font-lato"
                onClick={() => dispatch(addToCart(product))}
              >
                <ShoppingCart />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetail
