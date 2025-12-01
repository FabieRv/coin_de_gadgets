import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/pages/Home"
import CartPages from "./components/pages/Products/CartPages"
import ProductGrid from "./components/pages/Products/ProductGrid"
import ProductDetail from "./components/pages/Products/ProductDetail"
import Gallery from "./components/pages/Gallery/Gallery"
import Contact from "./components/pages/Contacts/Contact"
import Collection from "./components/pages/Collection/Collection"
import Signup from "./components/Auth/Signup"
import Login from "./components/Auth/Login"

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
      { path: "Collection", element: <Collection /> },
      { path: "contact", element: <Contact /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
    ],
  },
])
