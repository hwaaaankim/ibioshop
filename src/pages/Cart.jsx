import Icon from '../components/icon/Icon'
import ShoppingCartTable from '../components/cart/ShoppingCartTable'
import Total from '../components/cart/Total'
import CouponCode from '../components/cart/CouponCode'
import Shipping from '../components/cart/Shipping'
import GiftCertificate from '../components/cart/GiftCertificate'
import image from '../assets/images/10.jpg'
import { useState } from 'react'

const cartItems = [
  {
    image: image,
    name: 'Emasa rumas gacem',
    quantity: 1,
    model: 'Pt001',
    unitPrice: 20,
    total: 20,
  },
  {
    image: image,
    name: 'Comas samer rumas',
    quantity: 1,
    model: 'Pt001',
    unitPrice: 20,
    total: 20,
  },
]

function Cart() {
  const [showCouponForm, toggleCouponForm] = useState(true)
  const [showShippingForm, toggleShippingForm] = useState(false)
  const [showGiftCertForm, toggleGiftCertForm] = useState(false)

  // const hideOthers = (disc) => {

  // }

  return (
    <div className="flex flex-col sm:mx-10 mx-3 mb-4 pb-2 sm:text-sm lg:text-xs 2xl:m-auto lgp8:max-w-[1650px] lgp8:w-[95%]">
      <ul className="flex flex-row mb-4 mt-7 text-gray-400">
        <li>
          <a href="/">
            <Icon className="text-gray-100" size="12" id="home"></Icon>
          </a>
        </li>
        <Icon className="mt-0.5 mx-2" id="chevronRight" size="10"></Icon>
        <li className="">
          <a href="/cart">Shopping Cart</a>
        </li>
      </ul>
      <div>
        <div className="space-y-2">
          <h2 className="text-xl font-normal text-gray-500 pb-2">
            Shopping Cart
          </h2>
          <ShoppingCartTable cartItems={cartItems}></ShoppingCartTable>
          <h2 className="text-lg font-normal text-gray-500">
            What would you like to do next?
          </h2>
          <span>
            Choose if you have a discount code or reward points you want to use
            or would like to estimate your delivery cost.
          </span>
          <CouponCode
            show={showCouponForm}
            toggleHandler={() => toggleCouponForm((prev) => !prev)}
          />
          <Shipping
            show={showShippingForm}
            toggleHandler={() => toggleShippingForm((prev) => !prev)}
          />
          <GiftCertificate
            show={showGiftCertForm}
            toggleHandler={() => toggleGiftCertForm((prev) => !prev)}
          />
          <div>
            <Total></Total>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 justify-between">
        <a
          href="/"
          className="cursor-pointer  bg-blue-1 hover:bg-blue-2 text-white border-transparent 
                align-middle text-center leading-normal font-normal text-sm inline-block -ml-1 mt-1 pt-2 px-2 h-9"
        >
          Continue Shopping
        </a>
        <a
          href="/checkout"
          className="cursor-pointer  bg-blue-1 hover:bg-blue-2 text-white border-transparent 
                align-middle text-center leading-normal font-normal text-sm inline-block -ml-1 mt-1 pt-2 px-2 h-9"
        >
          Checkout
        </a>
      </div>
    </div>
  )
}

export default Cart
