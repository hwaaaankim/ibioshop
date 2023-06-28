import { createSlice } from '@reduxjs/toolkit'

const modal = {
  show: false,
  component: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: modal,
  reducers: {
    openModal: (modal, { payload }) => {
      modal.show = true
      modal.component = payload.component
    },
    closeModal: (modal) => {
      modal.show = false
      modal.component = null
    },
  },
})

export const { openModal } = modalSlice.actions

export default modalSlice.reducer
