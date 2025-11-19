import Container from "../common/Container"
import ProductCart from "./ProductCart"
import type { Product } from "../Types"

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div>
      <Container className="ml-0 mr-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default ProductGrid
