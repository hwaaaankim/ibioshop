import { createSlice } from '@reduxjs/toolkit'
import apiService from '../../services/http-common'
import { errorHandler } from '../../services/httpErrorHandler'

const httpInitial = {}

export const httpSlice = createSlice({
  name: 'http',
  initialState: httpInitial,
  reducers: {
    request: async (http, { payload }) => {
      try {
        const response = await apiService.request(payload)
        return response ? response.data : response
      } catch (error) {
        const errorModified = errorHandler(error)
        return { isError: true, error: errorModified }
      }
    },
    upload: async (http, { payload }) => {
      payload = {
        ...payload,
        headers: { 'Content-Type': 'multipart/form-data' },
      }
      try {
        const response = await apiService.request(payload)
        return response ? response.data : response
      } catch (error) {
        const errorModified = errorHandler(error)
        return { isError: true, error: errorModified }
      }
    },
    upload: async (http, { payload }) => {
      payload = {
        ...payload,
        headers: { 'Content-Type': 'multipart/form-data' },
      }
      try {
        const response = await apiService.request(payload)
        return response ? response.data : response
      } catch (error) {
        const errorModified = errorHandler(error)
        return { isError: true, error: errorModified }
      }
    },
    download: async (http, { payload }) => {
      payload = {
        ...payload,
        responseType: 'blob',
      }
      try {
        const response = await apiService.request(payload)
        return response ? response.data : response
      } catch (error) {
        const errorModified = errorHandler(error)
        return { isError: true, error: errorModified }
      }
    },
  },
})

export const { request, upload, download } = httpSlice.actions

export default httpSlice.reducer
