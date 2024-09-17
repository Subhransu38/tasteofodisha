import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import foodReducer from "./foodSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: { user: userReducer, food: foodReducer, cart: cartReducer },
});

export default store;
