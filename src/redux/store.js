import { configureStore } from '@reduxjs/toolkit'
import cartReduce from './cartReduce'

export const store = configureStore({
  reducer: {cart: cartReduce},
})