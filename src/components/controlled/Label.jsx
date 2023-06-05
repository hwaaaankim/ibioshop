function Label({ name, className, required }) {
  className = 'sm:text-right ' + className
  return (
    <div className="sm:text-right md:w-1/6 my-2 text-sm">
      {required ? (
        <span className="text-red-500 font-semibold mt-2">*</span>
      ) : (
        ''
      )}
      <label className={className}>{name}</label>
    </div>
  )
}

export default Label
