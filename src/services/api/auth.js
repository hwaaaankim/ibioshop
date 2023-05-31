import request from '../http-common'

const auth = {
  async signIn(payload) {
    try {
      const response = await request(payload)
      return { isError: false, data: response.data }
    } catch (err) {
      return { isError: true, error: err }
    }
  },
}
export default auth
