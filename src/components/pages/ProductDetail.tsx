import { Link } from "react-router-dom"
import Container from "../common/Container"

function ProductDetail() {
  return (
    <div>
      <Container className="border py-0!">
        <Link
          to="/"
          className="mb-8 inline-block text-blue-600 hover:underline font-medium"
        >
          &larr; Back to Home
        </Link>
      </Container>
    </div>
  )
}

export default ProductDetail
