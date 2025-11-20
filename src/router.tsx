import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/pages/Home"
import CartPages from "./components/pages/CartPages"
import ProductGrid from "./components/pages/ProductGrid"
import ProductDetail from "./components/pages/ProductDetail"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <ProductGrid /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "cart", element: <CartPages /> },
    ],
  },
])
