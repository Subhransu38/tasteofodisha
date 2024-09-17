import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: userInfo,
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
