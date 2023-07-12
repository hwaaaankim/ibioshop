import HeaderBottom from '../header/HeaderBottom'
import HeaderCenter from '../header/HeaderCenter'
import HeaderTop from '../header/HeaderTop'

function Header() {
  return (
    <>
      <HeaderTop />
      <div className="bg-primary px-5 md:px-0">
        <HeaderCenter />
        <HeaderBottom />
      </div>
    </>
  )
}
export default Header
