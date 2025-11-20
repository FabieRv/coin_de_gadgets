import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { products } from "../../constant"
import type { Product } from "../../Types"
type ProductState = {
  items: Product[]
  filteredItems: Product[]
  searchTerm: string
  category: string
}

const initialState: ProductState = {
  items: products,
  filteredItems: products,
  searchTerm: "",
  category: "All",
}

const filterProducts = (state: ProductState) => {
  return state.items.filter((p) => {
    const matchCategory =
      state.category === "All" || p.category === state.category
    const matchSearch = p.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
      state.filteredItems = filterProducts(state)
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
      state.filteredItems = filterProducts(state)
    },
  },
})

export const { setSearchTerm, setCategory } = productSlice.actions
export default productSlice.reducer
