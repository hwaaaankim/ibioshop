import { createSlice } from '@reduxjs/toolkit'
import { cartService } from '../../services/storageService'

const cart = cartService.getCart()
const initialState = cart || []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload: product }) {
      const existingItem = state.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(state, { payload: productId }) {
      const index = state.findIndex((item) => item.id === productId)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
