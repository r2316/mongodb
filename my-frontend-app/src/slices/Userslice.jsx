import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    islogin: false,
  },
  reducers: {
    loginUser: (state) => {
      state.islogin = true;
    },
    logoutUser: (state) => {
      state.islogin = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
