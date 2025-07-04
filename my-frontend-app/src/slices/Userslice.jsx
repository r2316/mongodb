import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    islogin: false,user_id:""
  },
  reducers: {
    loginUser: (state,payload) => {
      state.islogin = true;
      
      state.user_id=payload.payload
    },
    logoutUser: (state) => {
      state.islogin = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
