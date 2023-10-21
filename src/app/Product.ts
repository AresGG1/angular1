import {Discount} from "./Discount";

export interface Product {
  id: number,
  name: string,
  isInStock: boolean,
  price: number
  discount: Discount
}
