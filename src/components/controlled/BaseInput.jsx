import Icon from '../icon/Icon'

export default function BaseInput({
  type = 'text',
  value,
  setter,
  icon,
  placehoder,
}) {
  return (
    <div className="w-full flex space-x-3 items-center group focus-within:border-2 focus-within:border-black bg-gray-50 border border-gray-300 rounded-lg p-3">
      <Icon id={icon} size={16} />
      <input
        type={type}
        value={value}
        placeholder={placehoder}
        className="flex-auto outline-none bg-gray-50 w-full text-sm"
        onChange={(event) => setter(event.target.value)}
      />
    </div>
  )
}
