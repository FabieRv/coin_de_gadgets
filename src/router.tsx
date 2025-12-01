import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/pages/Home"
import CartPages from "./components/pages/Products/CartPages"
import ProductGrid from "./components/pages/Products/ProductGrid"
import ProductDetail from "./components/pages/Products/ProductDetail"
import Gallery from "./components/pages/Gallery/Gallery"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <ProductGrid /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "cart", element: <CartPages /> },
      { path: "gallery", element: <Gallery /> },
    ],
  },
])
