import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from '@/store/counterSlice'
import navReducer from '@/store/navSlice'

const reducer = combineReducers({
  counter: counterReducer,
  nav: navReducer
})

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
})
