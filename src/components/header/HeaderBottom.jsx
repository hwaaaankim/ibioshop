import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Dropdown } from './HeaderTop'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

function GiftNToys() {
  const categories = [
    {
      category: 'Apparel',
      subcategories: [
        'Accessories for Tablet PC',
        'Accessories for iPad',
        'Accessories for iPhone',
        'Bags, Holiday Supplies',
        'Car Alarms and Security',
        'Car Audio & Speakers',
      ],
    },
    {
      category: 'Camping and hiking',
      subcategories: [
        'Earings',
        'Shaving & Hair',
        'Removal',
        'Salon & Spa Equipment',
      ],
    },
    {
      category: 'Holiday supplies',
      subcategories: [
        'Batteries and Chargers',
        'Bath & Body',
        'Headphones & Headsets',
        'Home Audio',
      ],
    },
    {
      category: 'cables & connectors',
      subcategories: ['Cameras & Photo', 'Electronics', 'Outdoor & Traveling'],
    },
    {
      category: 'smartphone & tablets',
      subcategories: [
        'Sports & Outdoors',
        'Bath & Body',
        'Gadgets & Auto Parts',
      ],
    },
  ]
  const content = (
    <div className="py-12 px-6 grid grid-cols-3 gap-4 w-[650px]">
      {categories.map((item, index) => (
        <div key={index} className="space-y-3">
          <div className="font-bold uppercase">{item.category}</div>
          <div className="space-y-2">
            {item.subcategories.map((subItem, sindex) => (
              <div
                key={sindex}
                className="text-sm cursor-pointer hover:text-primary"
              >
                {subItem}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <Dropdown
      placement="right-start"
      bordered={false}
      hasPadding={false}
      content={content}
      offset={[0, 16]}
    >
      <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
        <img
          src="image/catalog/menu/icons/ico10.png"
          className="w-[26px] h-[26px]"
        />
        <div className="text-sm flex-auto group-hover:text-primary">
          Gifts & Toys
        </div>
        <i className="fa fa-angle-right text-gray-400"></i>
      </div>
    </Dropdown>
  )
}

function Electronics() {
  const categories = [
    {
      category: 'smartphone',
      subcategories: ['Esdipiscing', 'Scanners', 'Apple', 'Dell', 'Scanners'],
    },
    {
      category: 'Electronics',
      subcategories: ['Asdipiscing', 'Diam Sit', 'Labore et', 'Monitors'],
    },
  ]
  const content = (
    <div className="py-12 px-6 grid grid-cols-2 gap-4 w-[350px]">
      <div className="space-y-4">
        {categories.map((item, index) => (
          <div key={index} className="space-y-3">
            <div className="font-bold uppercase">{item.category}</div>
            <div className="space-y-2">
              {item.subcategories.map((subItem, sindex) => (
                <div
                  key={sindex}
                  className="text-sm cursor-pointer hover:text-primary"
                >
                  {subItem}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <img src="image/catalog/menu/megabanner/vbanner1.jpg" alt="" />
    </div>
  )
  return (
    <Dropdown
      placement="right-start"
      bordered={false}
      hasPadding={false}
      content={content}
      offset={[0, 16]}
    >
      <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
        <img
          src="image/catalog/menu/icons/ico9.png"
          className="w-[26px] h-[26px]"
        />
        <div className="text-sm flex-auto group-hover:text-primary">
          Electronic
        </div>
        <i className="fa fa-angle-right text-gray-400"></i>
      </div>
    </Dropdown>
  )
}

function HealthNBeauty() {
  const categories = [
    {
      category: 'car alarms and security',
      subcategories: [
        'Accessories for Tablet PC',
        'Accessories for iPad',
        'Accessories for iPhone',
        'Bags, Holiday Supplies',
        'Car Alarms and Security',
        'Car Audio & Speakers',
      ],
    },
    {
      category: 'electronics',
      subcategories: [
        'Earings',
        'Shaving & Hair',
        'Removal',
        'Salon & Spa Equipment',
      ],
    },
    {
      category: 'more car accessories',
      subcategories: [
        'Batteries and Chargers',
        'Bath & Body',
        'Headphones & Headsets',
        'Home Audio',
      ],
    },
    {
      category: 'health & beauty',
      subcategories: ['Cameras & Photo', 'Electronics', 'Outdoor & Traveling'],
    },
    {
      category: 'sports & outdoors',
      subcategories: [
        'Sports & Outdoors',
        'Bath & Body',
        'Gadgets & Auto Parts',
      ],
    },
    {
      category: 'gadgets & auto parts',
      subcategories: [
        'Sports & Outdoors',
        'Bath & Body',
        'Gadgets & Auto Parts',
      ],
    },
  ]
  const content = (
    <div className="py-12 px-6 grid grid-cols-3 gap-4 w-[650px]">
      {categories.map((item, index) => (
        <div key={index} className="space-y-3">
          <div className="font-bold uppercase">{item.category}</div>
          <div className="space-y-2">
            {item.subcategories.map((subItem, sindex) => (
              <div
                key={sindex}
                className="text-sm cursor-pointer hover:text-primary"
              >
                {subItem}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <Dropdown
      placement="right-start"
      bordered={false}
      hasPadding={false}
      content={content}
      offset={[0, 16]}
    >
      <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
        <img
          src="image/catalog/menu/icons/ico7.png"
          className="w-[26px] h-[26px]"
        />
        <div className="text-sm flex-auto group-hover:text-primary">
          Health & Beauty
        </div>
        <i className="fa fa-angle-right text-gray-400"></i>
      </div>
    </Dropdown>
  )
}

function SmartphoneNTablets() {
  const categories = [
    'Headphones & Headsets',
    'Home Audio',
    'Health & Beauty',
    'Helicopters & Parts',
    'Helicopters & Parts',
  ]
  const content = (
    <div className="py-4 px-4 space-y-2">
      {categories.map((category, index) => (
        <div key={index} className="text-sm cursor-pointer hover:text-primary">
          {category}
        </div>
      ))}
    </div>
  )
  return (
    <Dropdown
      placement="right-start"
      bordered={false}
      hasPadding={false}
      content={content}
      offset={[0, 16]}
    >
      <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
        <img
          src="image/catalog/menu/icons/ico6.png"
          className="w-[26px] h-[26px]"
        />
        <div className="text-sm flex-auto group-hover:text-primary">
          Smartphone & Tablets
        </div>
        <i className="fa fa-angle-right text-gray-400"></i>
      </div>
    </Dropdown>
  )
}

function CategoriesMenu({ isBigScreen }) {
  const [hidden, setHidden] = useState(false)
  const Content = ({ setHidden, isHome }) => {
    const [initial, setInitial] = useState(true)
    const [showMoreCategories, setShowMore] = useState(false)
    const handleToggle = () => {
      if (initial) setInitial(false)
      else {
        if (showMoreCategories && !isHome) {
          setHidden(true)
        }
      }
      setShowMore((prev) => !prev)
    }
    return (
      <div className="pl-2 pr-4 pb-3 bg-[#f5f5f5] w-[237px]">
        <GiftNToys />

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico1.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Fashion & Accessories
          </div>
        </div>
        <Electronics />

        <HealthNBeauty />

        <SmartphoneNTablets />

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico5.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Health & Beauty
          </div>
        </div>

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico4.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Bathroom
          </div>
        </div>

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico3.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Metallurgy
          </div>
        </div>

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico2.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Bedroom
          </div>
        </div>

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico1.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Health & Beauty
          </div>
        </div>

        {showMoreCategories && (
          <>
            <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
              <img
                src="image/catalog/menu/icons/ico12.png"
                className="w-[26px] h-[26px]"
              />
              <div className="text-sm flex-auto group-hover:text-primary">
                Jewelry & Watches
              </div>
            </div>

            <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
              <img
                src="image/catalog/menu/icons/ico9.png"
                className="w-[26px] h-[26px]"
              />
              <div className="text-sm flex-auto group-hover:text-primary">
                Home & Lights
              </div>
            </div>

            <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
              <img
                src="image/catalog/menu/icons/ico6.png"
                className="w-[26px] h-[26px]"
              />
              <div className="text-sm flex-auto group-hover:text-primary">
                Metallurgy
              </div>
            </div>
          </>
        )}

        <div
          className="flex space-x-3 items-center cursor-pointer pl-2 py-[3px]"
          onClick={handleToggle}
        >
          <i
            className={
              'fa fa-' +
              (showMoreCategories ? 'minus' : 'plus') +
              '-square' +
              (initial ? '-o' : '') +
              ' text-primary'
            }
          ></i>
          <div className="text-sm flex-auto text-primary">
            {initial ? 'More' : showMoreCategories ? 'Close' : 'Open'}{' '}
            Categories
          </div>
        </div>
      </div>
    )
  }
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isVTrue = isBigScreen && isHome
  const isVFalse = hidden

  useEffect(() => {
    setTimeout(() => {
      if (hidden) setHidden(false)
    }, 1000)
  }, [hidden])
  return (
    <Dropdown
      placement="bottom-start"
      bordered={false}
      hasPadding={false}
      content={<Content setHidden={setHidden} isHome={isHome} />}
      offset={0}
      visible={isVFalse ? false : isVTrue ? true : undefined}
    >
      <div>
        <div className="flex space-x-2 justify-between items-center bg-black px-4 py-[10px] w-[237px] rounded-t">
          <div className="flex space-x-2 items-center">
            <i className="fa fa-bars" style={{ fontSize: 16 }} />
            <div className="uppercase text-sm font-bold">all categories</div>
          </div>
          <i className="fa fa-angle-down" style={{ fontSize: 16 }} />
        </div>
      </div>
    </Dropdown>
  )
}

function HomeDropDown() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (hidden) setHidden(false)
    }, 1000)
  }, [hidden])

  const content = (
    <div className="p-10 flex space-x-8">
      {[
        'Home page - (default)',
        'Home page - layout 2',
        'Home page - layout 3',
        'Home page - rtl',
      ].map((title, index) => (
        <div
          key={index}
          className="w-[110px] space-y-2 cursor-pointer group"
          onClick={() => setHidden(true)}
        >
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
      visible={hidden ? false : undefined}
    >
      <div>
        <div className="flex space-x-2 items-center py-4 cursor-pointer hover:text-black">
          <Link to="/" className="uppercase text-sm font-semibold">
            home
          </Link>
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
      links: [
        { name: 'category page 1', path: 'category' },
        { name: 'category page 2', path: 'catrgory_two' },
        { name: 'category page 3', path: 'catrgory_three' },
      ],
    },
    {
      title: 'product',
      links: [
        { name: 'product page 1', path: 'product_one' },
        { name: 'product page 2', path: 'product' },
      ],
    },
    {
      title: 'shopping',
      links: [
        { name: 'shopping cart', path: 'cart' },
        { name: 'checkout', path: 'checkout' },
        { name: 'compare', path: 'compare' },
        { name: 'wishlist', path: 'wish_list' },
      ],
    },
    {
      title: 'my account',
      links: [
        { name: 'login', path: 'login' },
        { name: 'register', path: 'register' },
        { name: 'my account', path: 'my_account' },
        { name: 'order history', path: 'order_history' },
        { name: 'order information', path: 'order_info' },
        { name: 'product returns', path: 'product_return' },
        { name: 'gift voucher', path: 'gift_voucher' },
      ],
    },
  ]
  const navigate = useNavigate()
  const [hidden, setHidden] = useState(false)
  const handleNavigation = (path) => {
    navigate(path)
    setHidden(true)
  }

  useEffect(() => {
    setTimeout(() => {
      if (hidden) setHidden(false)
    }, 1000)
  }, [hidden])

  const content = (
    <div className="p-10 flex space-x-8 items-start">
      {navs.map((nav, nindex) => (
        <div key={nindex} className="space-y-4">
          <div className="uppercase text-gray-700 font-semibold cursor-pointer hover:text-primary border-b pb-2">
            {nav.title}
          </div>
          <div className="space-y-4">
            {nav.links.map((link, lindex) => (
              <div
                key={lindex}
                className="capitalize text-xs cursor-pointer hover:text-primary"
                onClick={() => handleNavigation(link.path)}
              >
                {link.name}
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
      visible={hidden ? false : undefined}
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
    {
      links: [
        { name: 'FAQ', path: 'faq' },
        { name: 'Site Map' },
        { name: 'Contact us', path: 'contact_us' },
        { name: 'Banner' },
        { name: 'Effect' },
      ],
    },
    {
      links: [
        { name: 'About us 1', path: 'about' },
        { name: 'About us 2', path: '' },
        { name: 'About us 3', path: '' },
        { name: 'About us 4', path: '' },
      ],
    },
  ]

  const navigate = useNavigate()
  const [hidden, setHidden] = useState(false)
  const handleNavigation = (path) => {
    navigate(path)
    setHidden(true)
  }

  useEffect(() => {
    setTimeout(() => {
      if (hidden) setHidden(false)
    }, 1000)
  }, [hidden])

  const content = (
    <div className="p-10 flex space-x-8 items-start">
      {navs.map((nav, nindex) => (
        <div key={nindex} className="space-y-4">
          <div className="space-y-4">
            {nav.links.map((link, lindex) => (
              <div
                key={lindex}
                className="text-xs cursor-pointer hover:text-primary"
                onClick={() => handleNavigation(link.path)}
              >
                {link.name}
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
      visible={hidden ? false : undefined}
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

  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (hidden) setHidden(false)
    }, 1000)
  }, [hidden])

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
                onClick={() => setHidden(true)}
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
      visible={hidden ? false : undefined}
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
      <Link to="blog">Blog</Link>
    </div>
  )
}

function AccountNav() {
  return (
    <div className="flex space-x-4 items-center justify-end text-[12px]">
      <div className="flex space-x-2 items-center">
        <div className="flex space-x-1 items-center cursor-pointer hover:text-black">
          <i className="fa fa-lock" />
          <Link to="/login">
            <div>Login</div>
          </Link>
        </div>
        <div>or</div>
        <Link to="/register">
          <div className="cursor-pointer hover:text-black">Register</div>
        </Link>
      </div>

      <div className="border border-l h-4 border-white"></div>

      <div className="flex space-x-1 items-center">
        <i className="fa fa-phone-square" />
        <div>Hotline (+123)4 567 890</div>
      </div>
    </div>
  )
}

function Drawer({ content, children }) {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <div className="">
      <div onClick={() => setShowDrawer(true)}>{children}</div>
      <AnimatePresence>
        {showDrawer && (
          <motion.div
            initial={{ x: -100 + '%' }}
            animate={{ x: 0 }}
            exit={{ x: -100 + '%' }}
            transition={{ ease: 'easeInOut' }}
            className="fixed left-0 top-0 bottom-0 z-20 bg-[#333] text-white space-y-2 p-4"
          >
            <div className="flex justify-end">
              <div
                className="cursor-pointer p-2"
                onClick={() => setShowDrawer(false)}
              >
                <i className="fa fa-times"></i>
              </div>
            </div>
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function CategoriesMenuDrawer() {
  const Content = () => {
    const [initial, setInitial] = useState(true)
    const [showMoreCategories, setShowMore] = useState(false)
    const handleToggle = () => {
      if (initial) setInitial(false)
      setShowMore((prev) => !prev)
    }
    return (
      <div className="pl-2 pr-4 pb-3 w-[237px]">
        {/* <GiftNToys /> */}

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico1.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Fashion & Accessories
          </div>
        </div>
        {/* <Electronics /> */}

        {/* <HealthNBeauty /> */}

        {/* <SmartphoneNTablets /> */}

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico5.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Health & Beauty
          </div>
        </div>

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico4.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Bathroom
          </div>
        </div>

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico3.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Metallurgy
          </div>
        </div>

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico2.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Bedroom
          </div>
        </div>

        <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
          <img
            src="image/catalog/menu/icons/ico1.png"
            className="w-[26px] h-[26px]"
          />
          <div className="text-sm flex-auto group-hover:text-primary">
            Health & Beauty
          </div>
        </div>

        {showMoreCategories && (
          <>
            <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
              <img
                src="image/catalog/menu/icons/ico12.png"
                className="w-[26px] h-[26px]"
              />
              <div className="text-sm flex-auto group-hover:text-primary">
                Jewelry & Watches
              </div>
            </div>

            <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
              <img
                src="image/catalog/menu/icons/ico9.png"
                className="w-[26px] h-[26px]"
              />
              <div className="text-sm flex-auto group-hover:text-primary">
                Home & Lights
              </div>
            </div>

            <div className="flex space-x-2 items-center cursor-pointer group py-[3px]">
              <img
                src="image/catalog/menu/icons/ico6.png"
                className="w-[26px] h-[26px]"
              />
              <div className="text-sm flex-auto group-hover:text-primary">
                Metallurgy
              </div>
            </div>
          </>
        )}

        <div
          className="flex space-x-3 items-center cursor-pointer pl-2 py-[3px]"
          onClick={handleToggle}
        >
          <i
            className={
              'fa fa-' +
              (showMoreCategories ? 'minus' : 'plus') +
              '-square' +
              (initial ? '-o' : '') +
              ' text-primary'
            }
          ></i>
          <div className="text-sm flex-auto text-primary">
            {initial ? 'More' : showMoreCategories ? 'Close' : 'Open'}{' '}
            Categories
          </div>
        </div>
      </div>
    )
  }

  return (
    <Drawer content={<Content />}>
      <div className="flex space-x-2 items-center py-1 cursor-pointer">
        <i className="fa fa-bars"></i>
        <div className="uppercase text-sm">all categories</div>
      </div>
    </Drawer>
  )
}

function MainMenuDrawer() {
  const Content = () => (
    <div className="min-w-[200px]">
      {['Home', 'features', 'pages', 'categories', 'accessories', 'blog'].map(
        (nav, index) => (
          <div
            className="uppercase p-1 cursor-pointer border-t border-gray-500"
            key={index}
          >
            {nav}
          </div>
        )
      )}
    </div>
  )
  return (
    <Drawer content={<Content />}>
      <div className="py-1 px-2">
        <i className="fa fa-bars" style={{ fontSize: 20 }}></i>
      </div>
    </Drawer>
  )
}

export default function HeaderBottom() {
  const islgp8 = useMediaQuery({ query: '(min-width: 1200px)' })

  return (
    <div className="flex items-center mdp5:space-x-8 text-white px-[2.5%]">
      <div className="hidden mdp5:flex space-x-8 items-end">
        <CategoriesMenu isBigScreen={islgp8} />
        <HomeDropDown />
        <FeaturesDropDown />
        <PagesDropDown />
        <CategoriesDropDown />
      </div>
      <div className="hidden mdp5:flex space-x-8 items-center">
        <Accessories />
        <Blog />
      </div>
      <div className="flex-auto pt-2 hidden lgp8:block">
        <AccountNav />
      </div>
      <div className="flex-auto flex mdp5:hidden items-center justify-between">
        <CategoriesMenuDrawer />
        <MainMenuDrawer />
      </div>
    </div>
  )
}
