import { configureStore } from "@reduxjs/toolkit";
import ProdcutSlice from "./slices/Prodcut-slice";
import cartSlice from "./slices/Cart-slice";
import favoriteSlice from "./slices/Favorite-slice";
export const store = configureStore({
  reducer: {
    prodcut: ProdcutSlice,
    cart: cartSlice,
    favorite: favoriteSlice,
  },
});
