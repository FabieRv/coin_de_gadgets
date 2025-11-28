import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../components/features/products/ProductSlice"
import cartReducer from "../components/features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
    product: productReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
