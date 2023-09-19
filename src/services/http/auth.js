import apiService from './http-common'
import { tokenService } from '../storageService'

const auth = {
  async signIn(payload) {
    try {
      const response = await apiService.request(payload)
      if (response.data.user.role === 'USER') {
        tokenService.saveToken(response.data.access_token)
        apiService.setHeader()
      }

      return {
        isError: false,
        token: response.data.access_token,
        user: response.data.user,
      }
    } catch (err) {
      return { isError: true, error: err }
    }
  },
  signOut() {
    apiService.removeHeader()
    tokenService.removeToken()
  },
}
export default auth
