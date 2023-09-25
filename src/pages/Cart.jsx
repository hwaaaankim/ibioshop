import ShoppingCartTable from '../components/cart/ShoppingCartTable'
import Total from '../components/cart/Total'
import CouponCode from '../components/cart/CouponCode'
import Shipping from '../components/cart/Shipping'
import GiftCertificate from '../components/cart/GiftCertificate'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPath, toggleVisibility } from '../store/slices/breadcrumbSlice'

function Cart() {
  const [showCouponForm, toggleCouponForm] = useState(true)
  const [showShippingForm, toggleShippingForm] = useState(false)
  const [showGiftCertForm, toggleGiftCertForm] = useState(false)

  const smartToggleHandler = (targetKey) => {
    const setters = {
      showCouponForm: toggleCouponForm,
      showShippingForm: toggleShippingForm,
      showGiftCertForm: toggleGiftCertForm,
    }
    Object.keys(setters)
      .filter((key) => key !== targetKey)
      .forEach((key) => setters[key](false))

    setters[targetKey]((prev) => !prev)
  }

  const dispatch = useDispatch()

  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(setPath({ path: [{ title: 'Shopping Cart', path: '/cart' }] }))
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    return hideBreadcrumb
  }, [])

  return (
    <div className="flex flex-col md:mx-10 mx-3 mb-4 pb-2 sm:text-sm lg:text-xs 2xl:m-auto lgp8:max-w-[1650px] lgp8:w-[95%]">
      <div>
        <div className="space-y-2">
          <h2 className="text-xl font-normal text-gray-500 pb-2">
            Shopping Cart
          </h2>
          <ShoppingCartTable />
          <h2 className="text-lg font-normal text-gray-500">
            What would you like to do next?
          </h2>
          <span>
            Choose if you have a discount code or reward points you want to use
            or would like to estimate your delivery cost.
          </span>
          <CouponCode
            show={showCouponForm}
            toggleHandler={() => smartToggleHandler('showCouponForm')}
          />
          <Shipping
            show={showShippingForm}
            toggleHandler={() => smartToggleHandler('showShippingForm')}
          />
          <GiftCertificate
            show={showGiftCertForm}
            toggleHandler={() => smartToggleHandler('showGiftCertForm')}
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
