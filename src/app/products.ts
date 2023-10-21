import {Product} from "./Product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "LACALUT",
    price: 22,
    isInStock: true,
    discount: {
      isApplied: true,
      discountedPrice: 17
    }
  },
  {
    id: 2,
    name: "Arsenal",
    price: 44,
    isInStock: true,
    discount: {
      isApplied: true,
      discountedPrice: 38
    }
  },
  {
    id: 3,
    name: "Mars",
    price: 15,
    isInStock: false,
    discount: {
      isApplied: false,
      discountedPrice: 15
    }  },
  {
    id: 4,
    name: "Fanta",
    price: 35,
    isInStock: true,
    discount: {
      isApplied: false,
      discountedPrice: 35
    }
  },
  {
    id: 5,
    name: "Kinder",
    price: 70,
    isInStock: true,
    discount: {
      isApplied: true,
      discountedPrice: 59
    }
  }
]
