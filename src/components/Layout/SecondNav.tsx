import { useDispatch, useSelector } from "react-redux"
import { setSearchTerm } from "../features/products/ProductSlice"
import Container from "../common/Container"
import type { RootState } from "../../App/Store"
import { ShoppingCart } from "lucide-react"

function SecondNav() {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state: RootState) => state.product.searchTerm)

  return (
    <div className="shadow-md">
      <Container className="flex items-center justify-between text-black p-4! font-Montser">
        <nav className="flex w-full max-w-5xl mx-auto">
          {/* Input takes 50% */}
          <div className="w-1/2 pr-2">
            <input
              placeholder="Search Product"
              type="text"
              className="bg-zinc-100 rounded-md border border-zinc-300 focus:outline-none py-1 px-4 w-full"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </div>

          {/* Cart icon takes 50% */}
          <div className="w-1/2 flex justify-end items-center pl-2">
            <ShoppingCart size={30} className="text-zinc-700 cursor-pointer" />
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default SecondNav
