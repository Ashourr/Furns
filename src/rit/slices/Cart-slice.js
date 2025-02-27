import { createSlice } from "@reduxjs/toolkit";
// الحالة الابتدائية
const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};
// إنشاء Slice
export let cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    // إضافة إلى السلة
    addToCart: (state, action) => {
      let findPro = state.items.find((pro) => pro.id === action.payload.id);
      if (findPro) {
        findPro.qty += 1;
      } else {
        let proClone = { ...action.payload, qty: 1 };
        state.items.push(proClone);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    // حذف من السلة
    deleteFromToCart: (state, action) => {
      state.items = state.items.filter((pro) => pro.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    // إفراغ السلة
    clearCart: (state) => {
      state.items = [];
      window.localStorage.removeItem("cart");
    },
    // تعيين السلة بحالة جديدة
    setCart: (state, action) => {
      state = action.payload;
    },
    // زيادة الكمية
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
      } else {
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    // تقليل الكمية وحذف المنتج إذا كانت الكمية صفرًا
    // decreaseQuantity: (state, action) => {
    //   const item = state.items.find((item) => item.id === action.payload.id);
    //   if (item && item.qty > 0) {
    //     item.qty -= 1;
    //   } else {
    //     return;
    //   }
    //   localStorage.setItem("cart", JSON.stringify(state.items));
    // },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          state.items = state.items.filter(
            (pro) => pro.id !== action.payload.id
          );
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});
export let {
  addToCart,
  deleteFromToCart,
  clearCart,
  setCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
