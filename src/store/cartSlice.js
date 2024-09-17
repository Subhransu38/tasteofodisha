import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "../utils/fetchLocalStorageData";

const cartInfo = fetchCart();
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartShow: false,
    cartItems: cartInfo,
  },
  reducers: {
    setCartShow(state, action) {
      state.cartShow = action.payload;
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const { setCartShow, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
