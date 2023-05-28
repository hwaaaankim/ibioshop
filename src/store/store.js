import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './slices/headerSlice'
import footerSlice from './slices/footerSlice'

export const store = configureStore({
  reducer: {
    header: headerSlice,
    footer: footerSlice,
  },
})
