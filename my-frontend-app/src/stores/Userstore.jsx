import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/Userslice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
