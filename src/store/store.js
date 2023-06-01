import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './slices/headerSlice'
import footerSlice from './slices/footerSlice'
import authSlice from './slices/authSlice'

export const store = configureStore({
  reducer: {
    header: headerSlice,
    footer: footerSlice,
    auth: authSlice,
  },
})
