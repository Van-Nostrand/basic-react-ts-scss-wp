import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    open: false
  },
  reducers: {
    setOpen: (state, { payload }) => {
      state.open = payload
    }
  }
})

export const { setOpen } = navSlice.actions

export default navSlice.reducer
