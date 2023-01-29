import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    open: false,
    showMore: false
  },
  reducers: {
    setOpen: (state, { payload }) => {
      state.open = payload
    },
    setShowMore: (state, { payload }) => {
      state.showMore = payload
    }
  }
})

export const { setOpen, setShowMore } = navSlice.actions

export default navSlice.reducer
