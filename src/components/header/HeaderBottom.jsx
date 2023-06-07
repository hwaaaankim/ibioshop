import { Dropdown } from './HeaderTop'

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
  const content = (
    <div className="p-10 flex space-x-8">
      {[
        'Home page - (default)',
        'Home page - layout 2',
        'Home page - layout 3',
        'Home page - rtl',
      ].map((title, index) => (
        <div key={index} className="w-[110px] space-y-2 cursor-pointer group">
          <img
            src="image/catalog/menu/home-1.jpg"
            className="w-full h-[60px]"
          />
          <div className="uppercase text-center text-xs text-gray-700 font-semibold group-hover:text-primary">
            {title}
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <Dropdown
      placement="bottom-start"
      bordered={false}
      hasPadding={false}
      content={content}
    >
      <div>
        <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
          <div className="uppercase text-sm font-semibold">home</div>
          <i className="fa fa-caret-down" />
        </div>
      </div>
    </Dropdown>
  )
}

function FeaturesDropDown() {
  const navs = [
    {
      title: 'Listing',
      links: ['category page 1', 'category page 2', 'category page 3'],
    },
    {
      title: 'product',
      links: ['product page 1', 'product page 2'],
    },
    {
      title: 'shopping',
      links: ['shopping cart', 'page', 'checkout', 'compare', 'wishlist'],
    },
    {
      title: 'my account',
      links: [
        'login',
        'register',
        'my account',
        'order history',
        'order information',
        'product returns',
        'gift voucher',
      ],
    },
  ]
  const content = (
    <div className="p-10 flex space-x-8 items-start">
      {navs.map((nav, nindex) => (
        <div key={nindex} className="space-y-4">
          <div className="uppercase text-gray-700 font-semibold cursor-pointer hover:text-primary border-b pb-2">
            {nav.title}
          </div>
          <div className="space-y-2">
            {nav.links.map((link, lindex) => (
              <div
                key={lindex}
                className="capitalize text-xs cursor-pointer hover:text-primary"
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <Dropdown
      placement="bottom-start"
      bordered={false}
      hasPadding={false}
      content={content}
    >
      <div>
        <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
          <div className="uppercase text-sm font-semibold">features</div>
          <i className="fa fa-caret-down" />
        </div>
      </div>
    </Dropdown>
  )
}

function PagesDropDown() {
  const navs = [
    ['FAQ', 'Site Map', 'Contact us', 'Banner', 'Effect'],
    ['About us 1', 'About us 2', 'About us 3', 'About us 4'],
  ]
  const content = (
    <div className="p-10 flex space-x-8 items-start">
      {navs.map((links, nindex) => (
        <div key={nindex} className="space-y-4">
          <div className="space-y-3">
            {links.map((link, lindex) => (
              <div
                key={lindex}
                className="text-xs cursor-pointer hover:text-primary"
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <Dropdown
      placement="bottom-start"
      bordered={false}
      hasPadding={false}
      content={content}
    >
      <div>
        <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
          <div className="uppercase text-sm font-semibold">pages</div>
          <i className="fa fa-caret-down" />
        </div>
      </div>
    </Dropdown>
  )
}

function CategoriesDropDown() {
  const navs = [
    {
      title: 'Automotive',
      links: [
        'car alarms & security',
        'car audio & speakers',
        'Gadgets & auto parts',
        'more car accessories',
      ],
    },
    {
      title: 'furnitures',
      links: ['bathroom', 'bedroom', 'decor', 'living room'],
    },
    {
      title: 'jewelry & watches',
      links: ['earings', 'wedding rings', 'men watches'],
    },
    {
      title: 'electronics',
      links: ['computer', 'smartphone', 'tablets', 'monitors'],
    },
  ]
  const content = (
    <div className="p-10 flex space-x-8 items-start">
      {navs.map((nav, nindex) => (
        <div key={nindex} className="space-y-4">
          <div className="opacity-80 hover:opacity-100 cursor-pointer w-[120px] h-[60px]">
            <img
              src="image/catalog/menu/megabanner/image-3.jpg"
              className="w-full h-full"
            />
          </div>
          <div className="uppercase text-gray-700 font-semibold cursor-pointer hover:text-primary border-b pb-2">
            {nav.title}
          </div>
          <div className="space-y-2">
            {nav.links.map((link, lindex) => (
              <div
                key={lindex}
                className="capitalize text-sm cursor-pointer hover:text-primary"
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <Dropdown
      placement="bottom"
      bordered={false}
      hasPadding={false}
      content={content}
    >
      <div>
        <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
          <div className="uppercase text-sm font-semibold">categories</div>
          <i className="fa fa-caret-down" />
        </div>
      </div>
    </Dropdown>
  )
}

function Accessories() {
  return (
    <div className="uppercase text-sm font-semibold cursor-pointer hover:text-black">
      accessories
    </div>
  )
}

function Blog() {
  return (
    <div className="uppercase text-sm font-semibold cursor-pointer hover:text-black">
      blog
    </div>
  )
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
