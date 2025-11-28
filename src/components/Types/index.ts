export type LinkType = {
  label: string
  href: string
}

export type Product = {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
}

export type ProductState = {
  items: Product[]
  filteredItems: Product[]
  searchTerm: string
  category: string
}