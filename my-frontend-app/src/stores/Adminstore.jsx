
/*import { configureStore } from '@reduxjs/toolkit'
import  adminreducer from "../slices/Adminslice"
export const store = configureStore({
  reducer: {
    admin:adminreducer
  },
})
  */
 import { configureStore } from '@reduxjs/toolkit'
import  adminreducer from "../slices/Adminslice"
import userreducer from "../slices/UserSlice"
export const store = configureStore({
  reducer: {
    admin:adminreducer,
    user:userreducer
  },
})
