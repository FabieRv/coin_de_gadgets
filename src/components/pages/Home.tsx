import { useDispatch } from "react-redux"
import { setCategory } from "../features/products/ProductSlice"
import Container from "../common/Container"
import ProductGrid from "./ProductGrid"
import Button from "../common/Button"

const Categories = ["All", "Electronics", "Household", "Sports", "Tools"]

function Home() {
  const dispatch = useDispatch()

  return (
    <div>
      <div className="bg flex items-center justify-center">
        <h1 className="text-white font-Montser text-[30px] lg:text-[60px] tracking-wider">
          THE GADGETS NOW
        </h1>
      </div>

      <Container className="pt-0!">
        <div className="flex gap-4 pt-4">
          {Categories.map((cat) => (
            <Button
              label={cat}
              key={cat}
              onClick={() => dispatch(setCategory(cat))}
            />
          ))}
        </div>

        <ProductGrid />
      </Container>
    </div>
  )
}

export default Home
