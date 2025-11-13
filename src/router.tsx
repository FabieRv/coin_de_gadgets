
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import ProductDetail from "./components/pages/ProductDetail";
import CartPages from "./components/pages/CartPages";

export const router= createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {path:"", element:<Home/>},
            {path:"product", element:<ProductDetail/>},
            {path:"cart", element:<CartPages/>}
        ]
    }
])