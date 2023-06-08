import { useRef } from 'react'

export default function RadioBox({ value, setter, title, selected }) {
  const radioboxRef = useRef(null)
  const clickTargeRef = () => radioboxRef.current.click()
  
  return (
    
    <div
      className="flex space-x-1 items-center py-0 cursor-pointer"
      onClick={clickTargeRef}
    >
      <input
        checked = {selected === value}
        type="radio"
        value={value}
        onChange={(event) => setter(event.target.value)}
        className="w-3 h-3"
        ref={radioboxRef}
      />
      <div className="text-xs text-gray-500">{title}</div>
    </div>
  )
}
