import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setStatus, setUser } from '../../store/slices/authSlice'
import auth from '../../services/http/auth'
import { useEffect } from 'react'
import eventEmitter from '../../services/eventEmitter'

export default function LogoutHandler() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(setStatus({ signedIn: false }))
    dispatch(setUser({ user: null }))
    auth.signOut()
    navigate('/login')
  }

  useEffect(() => {
    eventEmitter.on('signOut', handleLogout)
    return () => {
      eventEmitter.off('signOut', handleLogout)
    }
  }, [])
  return null
}
