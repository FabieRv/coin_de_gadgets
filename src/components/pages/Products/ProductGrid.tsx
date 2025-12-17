import Container from "../../common/Container"
import ProductCart from "./ProductCart"
import { useSelector } from "react-redux"
import type { RootState } from "../../../App/Store"

function ProductGrid() {
  const filtered = useSelector(
    (state: RootState) => state.product.filteredItems
  )
  return (
    <Container className="ml-0 mr-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
        {filtered.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default ProductGrid
