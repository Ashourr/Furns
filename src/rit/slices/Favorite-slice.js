import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  item: JSON.parse(localStorage.getItem("favorite")) || [],
};
export let favoriteSlice = createSlice({
  initialState,
  name: "favoriteSlice",
  reducers: {
    addToFavorite: (state, action) => {
      let findfavorite = state.item.find((favorite) => favorite.id === action.payload.id);
      if (findfavorite) {
        findfavorite.qty += 1;
      } else {
        let favoriteClone = { ...action.payload, qty: 1 };
        state.item.push(favoriteClone);
      }
      // state.item.push(action.payload);

      localStorage.setItem("favorite", JSON.stringify(state.item));
    },
    deleteFromToFavorite: (state, action) => {
      state.item = state.item.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      localStorage.setItem("favorite", JSON.stringify(state.item));
    },
  },
});
export let { addToFavorite, deleteFromToFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
