import { Link } from "react-router-dom"
import Container from "../common/Container"
import { ShoppingCart } from "lucide-react"

function SecondNav() {
  return (
    <div className="shadow-md">
      <Container className="flex items-center justify-between text-black p-4! font-Montser">
        <nav className="flex justify-between items-center container max-auto">
          <form action="" className="w-1/2 sm:block hidden  ">
            <input
              placeholder="Search Product"
              type="text"
              className="bg-zinc-100 rounded-md border border-zinc-300 flex lg:focus:outline py-1 px-2 w-full ml-6 lg:ml-10"
            />
          </form>
          <Link to={"/cart"} className="mr-0 lg:mr-10">
            <ShoppingCart size={30} className="cursor-pointer" />
          </Link>
        </nav>
      </Container>
    </div>
  )
}

export default SecondNav
