import { createSlice } from '@reduxjs/toolkit'

const modal = {
  show: false,
  id: undefined,
  props: undefined,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: modal,
  reducers: {
    openModal: (modal, { payload }) => {
      modal.show = true
      modal.id = payload.id
      modal.props = payload.props ? payload.props : {}
    },
    closeModal: (modal) => {
      modal.show = false
      modal.id = undefined
      modal.props = undefined
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
