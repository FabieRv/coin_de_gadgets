import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../components/features/products/ProductSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
})

// ✅ Définir les types RootState et AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
