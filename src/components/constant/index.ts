import type { LinkType } from "../Types"

export const headerLinkData: LinkType[] = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products/:id" },
  { label: "Galery", href: "/gallery" },
  { label: "Collection", href: "/collection" },
  { label: "Contact", href: "/contact" },
]

import type { Product } from "../Types"

export const products: Product[] = [
  {
    id: 1,
    title: "Asus Pot GeaForce RTX",
    price: 1000000,
    description: "Les gadgets promotionnels...",
    image: "/images/ordinateur.webp",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Motos Pot GeaForce RTX",
    price: 2400000,
    description: "Les gadgets promotionnels...",
    image: "/images/images-scooter.webp",
    category: "Sports",
  },
  {
    id: 4,
    title: "Table Melanine Pot",
    price: 20000,
    description: "Les gadgets promotionnels...",
    image: "/images/images-table.webp",
    category: "Household",
  },

  {
    id: 6,
    title: "Asus Pot GeaForce RTX",
    price: 25000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser",
    image: "/images/babylis_.webp",
    category: "Electronics",
  },
  {
    id: 7,
    title: "Asus Pot GeaForce RTX",
    price: 300000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable de fidéliser les anciens...After downloading, extract the zip file...",
    image: "/images/images-clavier.webp",
    category: "Electronics",
  },
  {
    id: 8,
    title: "Asus Pot GeaForce RTX",
    price: 220000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens",
    image: "/images/images-chaise.webp",
    category: "Household",
  },
  {
    id: 9,
    title: "Asus Pot GeaForce RTX",
    price: 3200,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...",
    image: "/images/img.webp",
    category: "Electronics",
  },
  {
    id: 10,
    title: "Asus Pot GeaForce RTX",
    price: 20000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...",
    image: "/images/cofert.webp",
    category: "Electronics",
  },
  {
    id: 11,
    title: "Asus Pot GeaForce RTX",
    price: 45000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...",
    image: "/images/chaise.webp",
    category: "Household",
  },
  {
    id: 12,
    title: "Asus Pot GeaForce RTX",
    price: 120000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...After downloading, extract the zip file...",
    image: "/images/goods_bicycle.webp",
    category: "Sports",
  },
  {
    id: 13,
    title: "Asus Pot GeaForce RTX",
    price: 25000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...After downloading, extract the zip file...",
    image: "/images/babyliss.webp",
    category: "Electronics",
  },
  {
    id: 14,
    title: "Asus Pot GeaForce RTX",
    price: 5000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...After downloading, extract the zip file...",
    image: "/images/images-torche.webp",
    category: "Tools",
  },
]

export const galleryImages = [
  { id: 1, src: "images/babylis_.webp", alt: "Image 1" },
  { id: 2, src: "public/images/images.webp", alt: "Image 2" },
  { id: 3, src: "public/images/cofert.webp", alt: "Image 3" },
  { id: 4, src: "public/images/images-clavier.webp", alt: "Image 4" },
  { id: 5, src: "public/images/images-table.webp", alt: "Image 5" },
  { id: 6, src: "public/images/images-scooter.webp", alt: "Image 6" },
]
