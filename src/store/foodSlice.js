import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    foodItems: null,
  },
  reducers: {
    setFoodItems(state, action) {
      state.foodItems = action.payload;
    },
  },
});

export const { setFoodItems } = foodSlice.actions;

export default foodSlice.reducer;
