
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  islogin:false,
  value:0
}

export const Adminslice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginAdmin: (state) => {     
      state.islogin = true
    },
     logoutAdmin: (state) => {
      state.islogin = false
    },
    increment:(state)=>{
        state.value+=1;
    },
    
    decrement:(state)=>{
        state.value-=1;
    }
  },
})


export const { loginAdmin, logoutAdmin,increment,decrement} = Adminslice.actions

export default Adminslice.reducer
