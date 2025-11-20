import { createSlice } from "@reduxjs/toolkit"
import { products } from "../../constant"
import { stat } from "fs"

const initialState = {
  items: products,
  filteredItems: products,
  searchTeam: "",
}

// seacrhc product seacrch category

const filterProducts = (state) => {
  return state.items.filter((products) => {
    const matchSearch = products.title
      .toLowerCase()
      .includes(state.searchTeam.toLowerCase())
    return matchSearch
  })
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTeam = action.payload
      state.filteredItems = filterProducts(state)
    },
  },
})

export const {setSearchTerm}=productSlice.actions
export default productSlice.reducer; 