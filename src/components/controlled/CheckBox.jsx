import { useRef } from 'react'

export default function CheckBox({ value, setter, title }) {
  const checkboxRef = useRef(null)
  const clickTargeRef = () => checkboxRef.current.click()

  return (
    <div
      className="flex space-x-2 items-baseline py-5 cursor-pointer"
      // style={{ width: 95 + '%', margin: '0 auto'}}
      onClick={clickTargeRef}
    >
      <input
        type="checkbox"
        value={value}
        // onKeyDown={(event) => setter(event.target.value)}
        className="w-3 h-3"
        ref={checkboxRef}
      />
      <div className="text-sm text-gray-500">{title}</div>
    </div>
  )
}
