import { useDispatch, useSelector } from "react-redux"
import { setSearchTerm } from "../features/products/ProductSlice"
import Container from "../common/Container"
import type { RootState } from "../../App/Store"
import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

function SecondNav() {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state: RootState) => state.product.searchTerm)

  const cartItems = useSelector((state: RootState) => state.cart.items)
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="shadow-md">
      <Container className="flex items-center justify-between text-black font-Montser py-6!">
        <nav className="flex w-full max-w-5xl mx-auto">
          <div className="w-1/2">
            <input
              placeholder="Search Product"
              type="text"
              className="bg-zinc-100 rounded-md border border-zinc-300 focus:outline-none py-1 px-4 w-full"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </div>
        </nav>

        <div className="relative flex items-center justify-end">
          <Link to={"/cart"} className="flex items-center">
            <ShoppingCart
              size={40}
              className="text-zinc-700 cursor-pointer bg-zinc-200 p-2 rounded-md transition-colors hover:bg-zinc-300"
            />
          </Link>

          {itemCount > 0 && (
            <span
              className="absolute -top-2 -right-2 bg-blue-700 text-white text-sm 
                rounded-full w-5 h-5 flex items-center justify-center pointer-events-none"
            >
              {itemCount}
            </span>
          )}
        </div>
      </Container>
    </div>
  )
}

export default SecondNav
