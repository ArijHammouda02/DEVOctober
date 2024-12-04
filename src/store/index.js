import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";
import { cartSlice } from "./cartSlice";
import products from "../data/products";

export const store = configureStore({
  reducer: { 
   products: productsSlice.reducer,
   cart: cartSlice.reducer,
  },
});