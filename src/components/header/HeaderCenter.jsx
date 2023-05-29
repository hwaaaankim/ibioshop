function Logo() {
  return (
    <div>
      <img src="image/catalog/logo.png" style={{ width: 189, height: 39 }} />
    </div>
  )
}

export default function HeaderCenter() {
  return (
    <div
      className="bg-primary"
      style={{
        paddingTop: 25,
        paddingBottom: 16,
        paddingLeft: 2.5 + '%',
        paddingRight: 2.5 + '%',
      }}
    >
      <div className="flex space-x-2 items-center">
        <Logo />
        <div>header center</div>
      </div>
    </div>
  )
}
