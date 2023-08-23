import { createSlice } from '@reduxjs/toolkit'
import { cartService } from '../../services/storageService'

const cart = cartService.getCart()
const initialState = cart || []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload: { product, quantity } }) {
      const existingItem = state.find((item) => item.id === product.id)
      if (existingItem) existingItem.quantity += quantity
      else state.push({ ...product, quantity })
      cartService.updateCart(state)
    },
    updateQuantity(state, { payload: { id, quantity } }) {
      const existingItem = state.find((item) => item.id === id)
      if (!existingItem) return

      existingItem.quantity = quantity
      cartService.updateCart(state)
    },
    removeFromCart(state, { payload: productId }) {
      const index = state.findIndex((item) => item.id === productId)
      if (index !== -1) state.splice(index, 1)
      cartService.updateCart(state)
    },
  },
})

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
