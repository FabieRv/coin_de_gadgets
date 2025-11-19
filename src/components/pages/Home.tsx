import Button from "../common/Button"
import Container from "../common/Container"
import ProductGrid from "./ProductGrid"
import { products } from "../constant"

const Categories = [
  "All",
  "Graphic Cards",
  "Monitors",
  "Power Supply",
  "Laptop",
]

function Home() {
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
            <Button label={cat} key={cat} />
          ))}
        </div>
        <ProductGrid products={products} />
      </Container>
    </div>
  )
}

export default Home
