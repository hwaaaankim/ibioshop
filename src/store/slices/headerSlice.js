import { createSlice } from '@reduxjs/toolkit'

const header = {
  hidden: false,
  cmWidth: 200, //categories menu
}

export const headerSlice = createSlice({
  name: 'header',
  initialState: header,
  reducers: {
    toggleVisibility: (header, { payload }) => {
      header.hidden = payload.hidden
    },
    setcmWidth: (header, { payload }) => {
      header.cmWidth = payload.width
    },
  },
})

export const { toggleVisibility, setcmWidth } = headerSlice.actions

export default headerSlice.reducer
