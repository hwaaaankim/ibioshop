import { useDispatch, useSelector } from 'react-redux'
import QuickView from '../product/QuickViewModal'
import CartNotice from '../Notification/Notice'
import { useEffect } from 'react'
import { closeModal } from '../../store/slices/modalSlice'

const modalConfig = [
  {
    id: 1,
    component: () => (
      <div className="p-10">Hello this is a product quick view</div>
    ),
  },
  {
    id: 2,
    component: QuickView,
  },
  {
    id: 3,
    component: CartNotice,
  },
]

export default function Modal() {
  const modal = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      dispatch(closeModal())
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  if (!modal.show) return null

  const Component = modalConfig.find(
    (config) => config.id === modal.id
  ).component

  return (
    <div className="fixed top-0 left-0 h-full w-full z-[10000]">
      <div className="relative w-full h-full">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black z-[10010] opacity-[0.65]"></div>
        <div className="absolute top-0 right-0 bottom-0 left-0 z-[10020] flex items-center justify-center">
          <div className="bg-white">
            <Component {...modal.props} />
          </div>
        </div>
      </div>
    </div>
  )
}
