import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/slicer/user';
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
