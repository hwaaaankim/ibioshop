import { useSelector } from 'react-redux'

export default function Modal() {
  const modal = useSelector((state) => state.modal)

  if (!modal.show) return null

  return (
    <div className="fixed top-0 left-0 h-full w-full z-[10000]">
      <div className="relative w-full h-full">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black z-[10010] opacity-[0.65]"></div>
        <div className="absolute top-0 right-0 bottom-0 left-0 z-[10020] flex items-center justify-center">
          <div className="bg-white">{modal.component}</div>
        </div>
      </div>
    </div>
  )
}
