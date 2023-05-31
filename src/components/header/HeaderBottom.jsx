function CategoriesMenu() {
  return (
    <div>
      <div className="flex space-x-12 items-center bg-black px-4 py-[10px] rounded-t">
        <div className="flex space-x-2 items-center">
          <i className="fa fa-bars" />
          <div className="uppercase">all categories</div>
        </div>
        <i className="fa fa-angle-down" />
      </div>
    </div>
  )
}

function HomeDropDown() {
  return (
    <div>
      <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
        <div className="uppercase text-sm font-semibold">home</div>
        <i className="fa fa-caret-down" />
      </div>
    </div>
  )
}

function FeaturesDropDown() {
  return (
    <div>
      <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
        <div className="uppercase text-sm font-semibold">features</div>
        <i className="fa fa-caret-down" />
      </div>
    </div>
  )
}

function PagesDropDown() {
  return (
    <div>
      <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
        <div className="uppercase text-sm font-semibold">pages</div>
        <i className="fa fa-caret-down" />
      </div>
    </div>
  )
}

function CategoriesDropDown() {
  return (
    <div>
      <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
        <div className="uppercase text-sm font-semibold">categories</div>
        <i className="fa fa-caret-down" />
      </div>
    </div>
  )
}

function Accessories() {
  return <div className="uppercase text-sm font-semibold">accessories</div>
}

function Blog() {
  return <div className="uppercase text-sm font-semibold">blog</div>
}

function AccountNav() {
  return (
    <div className="flex space-x-4 items-center justify-end text-[12px]">
      <div className="flex space-x-2 items-center">
        <div className="flex space-x-1 items-center cursor-pointer hover:text-black">
          <i className="fa fa-lock" />
          <div>Login</div>
        </div>
        <div>or</div>
        <div className="cursor-pointer hover:text-black">Register</div>
      </div>

      <div className="border border-l h-4 border-white"></div>

      <div className="flex space-x-1 items-center">
        <i className="fa fa-phone-square" />
        <div>Hotline (+123)4 567 890</div>
      </div>
    </div>
  )
}

export default function HeaderBottom() {
  return (
    <div
      className="flex items-center space-x-8 text-white"
      style={{ paddingLeft: 2.5 + '%', paddingRight: 2.5 + '%' }}
    >
      <div className="flex space-x-8 items-end">
        <CategoriesMenu />
        <HomeDropDown />
        <FeaturesDropDown />
        <PagesDropDown />
        <CategoriesDropDown />
      </div>
      <div className="flex space-x-8 items-center">
        <Accessories />
        <Blog />
      </div>
      <div className="flex-auto pt-2">
        <AccountNav />
      </div>
    </div>
  )
}
