import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/features/products/ProductSlice";


export const store= configureStore({
    reducer: {
        product:productReducer,
    }
})