import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export let fetchProducts = createAsyncThunk(
  "productslice/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:1337/api/prodcuts?populate=*");
    const data = await res.json();
    // console.log(data.data);
    return data.data;
  }
);

export const productslice = createSlice({
  initialState: [],
  name: "productslice",
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // console.log(action)
      return (state = action.payload);
    });
    // builder.addCase(fetchProducts.pending , (state, action)=>{

    // })
    // builder.addCase(fetchProducts.rejected,(state, action)=>{

    // })
  },
});
// export let { addProduct } = productslice.actions;
export default productslice.reducer;
