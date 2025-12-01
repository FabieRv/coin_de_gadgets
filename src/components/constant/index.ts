import type { LinkType } from "../Types"

export const headerLinkData: LinkType[] = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products/:id" },
  { label: "Galery", href: "/gallery" },
  { label: "FQA", href: "/fqa" },
  { label: "Contact", href: "/contact" },
]

import type { Product } from "../Types"

export const products: Product[] = [
  {
    id: 1,
    title: "Asus Pot GeaForce RTX",
    price: 1000000,
    description: "Les gadgets promotionnels...",
    image: "/images/ordinateur.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Motos Pot GeaForce RTX",
    price: 2400000,
    description: "Les gadgets promotionnels...",
    image: "/images/images-scooter.jpeg",
    category: "Sports",
  },
  {
    id: 4,
    title: "Table Melanine Pot",
    price: 20000,
    description: "Les gadgets promotionnels...",
    image: "/images/images-table.jpeg",
    category: "Household",
  },

  {
    id: 6,
    title: "Asus Pot GeaForce RTX",
    price: 25000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser",
    image: "/images/babylis_.jpg",
    category: "Electronics",
  },
  {
    id: 7,
    title: "Asus Pot GeaForce RTX",
    price: 300000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable de fidéliser les anciens...After downloading, extract the zip file...",
    image: "/images/images-clavier.jpeg",
    category: "Electronics",
  },
  {
    id: 8,
    title: "Asus Pot GeaForce RTX",
    price: 220000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens",
    image: "/images/images-chaise.jpeg",
    category: "Household",
  },
  {
    id: 9,
    title: "Asus Pot GeaForce RTX",
    price: 3200,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...",
    image: "/images/img.jpg",
    category: "Electronics",
  },
  {
    id: 10,
    title: "Asus Pot GeaForce RTX",
    price: 20000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...",
    image: "/images/ecouteur.png",
    category: "Electronics",
  },
  {
    id: 11,
    title: "Asus Pot GeaForce RTX",
    price: 45000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...",
    image: "/images/chaise-rouge_1308-86311.jpg",
    category: "Household",
  },
  {
    id: 12,
    title: "Asus Pot GeaForce RTX",
    price: 120000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...After downloading, extract the zip file...",
    image: "/images/goods_bicycle.jpg",
    category: "Sports",
  },
  {
    id: 13,
    title: "Asus Pot GeaForce RTX",
    price: 25000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...After downloading, extract the zip file...",
    image: "/images/babyliss.jpeg",
    category: "Electronics",
  },
  {
    id: 14,
    title: "Asus Pot GeaForce RTX",
    price: 5000,
    description:
      "Les gadgets promotionnels sont un moyen indispensable d’attirer de nouveaux clients mais aussi de fidéliser les anciens...After downloading, extract the zip file...",
    image: "/images/images-torche.jpeg",
    category: "Tools",
  },
]
