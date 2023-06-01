import { createSlice } from '@reduxjs/toolkit'
import { userService, tokenService } from '../../services/storageService'

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (user, { payload }) => {
      user = payload.user
      userService.saveUser(payload.user)
      if (payload.token) tokenService.saveToken(payload.token)
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
