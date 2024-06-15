import { configureStore } from '@reduxjs/toolkit'
import todoReducer from  './features/todo/todoslice';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer,
  },
})