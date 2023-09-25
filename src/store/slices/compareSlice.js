import { createSlice } from '@reduxjs/toolkit'
import { compareService } from '../../services/storageService'

const productsToCompare = compareService.get()
const initialState = productsToCompare || []

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    addToComparison(state, { payload: product }) {
      const existingItem = state.find((item) => item.id === product.id)
      if (existingItem) return

      if (state.length === 3) state.shift()
      state.push(product)
      compareService.update(state)
    },
    removeFromComparison(state, { payload: productId }) {
      const index = state.findIndex((item) => item.id === productId)
      if (index !== -1) state.splice(index, 1)
      compareService.update(state)
    },
  },
})

export const { addToComparison, removeFromComparison } = compareSlice.actions

export default compareSlice.reducer
