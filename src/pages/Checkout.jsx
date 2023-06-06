import BaseInput from '../components/controlled/BaseInput'
import RadioBox from '../components/controlled/RadioBox'
import CheckBox from '../components/controlled/CheckBox'
import { useState } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import image from '../assets/images/10.jpg'
import '../App.css'

function UserAccount() {
  const [userType, setUserType] = useState('guest')

  return (
    <div className="inline-block rounded box-border bg-white border border-solid mb-5 px-0 shadow-sm w-full">
      <div className="box-border px-2 py-2 bg-gray-100">
        <h4 className="text-base text-inherit flex gap-1 leading-none font-medium my-0">
          <i className="fa fa-sign-in"></i>
          Create an Account or Login
        </h4>
      </div>
      <div className="w-full mx-2 p-3 text-xs box-border">
        <span className="text-xl font-medium leading-tight text-neutral-600 dark:text-neutral-50">
          <ul className="space-y-3 mt-4 pb-6">
            <li>
              <RadioBox
                selected={userType}
                value="register"
                title="Register Account"
                setter={setUserType}
              />
            </li>
            <li>
              <RadioBox
                value="guest"
                selected={userType}
                title="Guest Checkout"
                setter={setUserType}
              />
            </li>
            <li>
              <RadioBox
                value="returning"
                selected={userType}
                title="Returning Customer"
                setter={setUserType}
              />
            </li>
          </ul>
        </span>
      </div>
    </div>
  )
}

function PersonalDetail() {
  const [userData, setUserData] = useState({
    fName: '',
    lName: '',
    email: '',
    phne: '',
    fax: '',
  })

  return (
    <div className="inline-block pb-5 rounded box-border bg-white border border-solid mb-5 px-0 shadow-sm w-full">
      <div className="box-border px-2 py-2 bg-gray-100">
        <h4 className="text-base text-inherit flex gap-1 leading-none font-medium my-0">
          <i className="fa fa-user"></i>
          Your Personal Details
        </h4>
      </div>
      <div className="w-full p-2 text-xs">
        <span className="text-xl font-medium leading-tight text-neutral-600 dark:text-neutral-50">
          <ul
            className="space-y-5"
            style={{ width: 95 + '%', margin: '0 auto' }}
          >
            <li className="mt-3">
              <BaseInput
                label="First Name"
                value={userData.fName}
                setter={setUserData}
                required={true}
                icon=""
                placeholder="First Name"
              />
            </li>
            <li>
              <BaseInput
                label="Last Name"
                value={userData.lName}
                required={true}
                setter={setUserData}
                icon=""
                placeholder="Last Name"
              />
            </li>
            <li>
              <BaseInput
                label="E-mail"
                value={userData.email}
                required={true}
                setter={setUserData}
                icon=""
                placeholder="E-mail"
              />
            </li>
            <li>
              <BaseInput
                label="Telephone"
                value={userData.phne}
                setter={setUserData}
                icon=""
                required={true}
                placeholder="Telephone"
              />
            </li>
            <li>
              <BaseInput
                label="Fax"
                value={userData.fax}
                setter={setUserData}
                icon=""
                placeholder="Fax"
              />
            </li>
          </ul>
        </span>
      </div>
    </div>
  )
}

function PersonalAddress() {
  const [address, setAddress] = useState({
    address1: '',
    address2: '',
    company: '',
    city: '',
    post: '',
    country: '',
    state: '',
    box: false,
  })
  const countries = [
    { name: '--- Please Select ---', value: '' },
    { name: 'Aaland Islands', value: 244 },
    { name: 'Bahrain', value: 17 },
  ]

  const states = [
    { name: '--- Please Select ---', value: '' },
    { name: 'Aaland Islands', value: 244 },
    { name: 'Bahrain', value: 17 },
  ]

  return (
    <div className="inline-block rounded box-border pb-4 bg-white border border-solid mb-5 px-0 shadow-sm w-full">
      <div className="box-border px-2 py-2 bg-gray-100">
        <h4 className="my-0">
          <i className="fa fa-book"></i>
          Your Address
        </h4>
      </div>
      <div className="w-full p-2 text-xs">
        <span className="text-xl font-medium leading-tight text-neutral-600 dark:text-neutral-50">
          <ul
            className="space-y-5 mb-3"
            style={{ width: 95 + '%', margin: '0 auto' }}
          >
            <li className="mt-3">
              <BaseInput
                label="Company"
                value={address.company}
                // setter={handleChange}
                icon=""
                placeholder="Company"
                onChange={(e) =>
                  setAddress({ ...address, company: e.target.value })
                }
              />
            </li>
            <li>
              <BaseInput
                label="Address 1"
                value={address.address1}
                required={true}
                setter={setAddress}
                icon=""
                placeholder="Address 1"
                onChange={(e) =>
                  setAddress({ ...address, address1: e.target.value })
                }
              />
            </li>
            <li>
              <BaseInput
                label="Address 2"
                value={address.address2}
                setter={setAddress}
                placeholder="Address 2"
                onChange={(e) =>
                  setAddress({ ...address, address2: e.target.value })
                }
              />
            </li>

            <li>
              <BaseInput
                label="City"
                value={address.city}
                required={true}
                setter={setAddress}
                placeholder="City"
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
            </li>
            <li>
              <BaseInput
                label="Post Code"
                value={address.post}
                setter={setAddress}
                required={true}
                placeholder="Post Code"
                onChange={(e) =>
                  setAddress({ ...address, post: e.target.value })
                }
              />
            </li>
            <li>
              <label className="block text-sm text-neutral-500">Country</label>
              <select
                onChange={(e) =>
                  setAddress({ ...address, country: e.target.value })
                }
                name="country-id"
                id="country"
                className="bg-white border-gray-1 inset-px
                           p-2 text-sm block w-full px-3 mt-1 transition duration-150 ease-in-out border rounded-md shadow-sm focus:shadow-blue-300 focus:outline-none 
                           focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              >
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {' '}
                    {country.name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <label className="block text-sm text-neutral-500">
                Region / State
              </label>
              <select
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
                name="zone-id"
                id="state"
                className="p-2 text-sm block w-full px-3 mt-1 transition bg-white duration-150 ease-in-out border 
                           border-gray-1 inset-px rounded-md shadow-sm focus:shadow-blue-300 focus:outline-none 
                           focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              >
                {states.map((state) => (
                  <option key={state.value} value={state.value}>
                    {' '}
                    {state.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <CheckBox
            checked={address.box === true}
            title="My delivery and billing addresses are the same."
            onClick={(e) => {
              setAddress({ ...address, box: !address.box })
            }}
          />
        </span>
      </div>
    </div>
  )
}

function DeliPayMethod() {
  const [deliveryMethod, setDelivery] = useState('free')
  const [paymentMethod, setPayment] = useState('cash')

  const handleDeliveryMethod = (e) => {
    const target = e.target
    if (target.checked) {
      setDelivery(target.value)
    }
  }

  const handlePaymentMethod = (e) => {
    const target = e.target
    if (target.checked) {
      setPayment(target.value)
    }
  }
  return (
    <div className="relative text-neutral-600 w-full float-left px-4 box-border">
      <div className="inline-block rounded box-border pb-4 bg-white border border-solid mb-5 px-0 shadow-sm w-full">
        <div className="w-1/2 float-left px-4 relative ">
          <div className="px-3 py-2">
            <h4 className="text-base my-0 leading-none font-medium ">
              <i className="fa fa-truck"></i> Delivery Method
            </h4>
          </div>
          <div className="p-4 text-xs space-y-3">
            <p>
              Please select the preferred shipping method to use on this order.
            </p>
            <div className="my-2 relative block ">
              <RadioBox
                selected={deliveryMethod}
                value="free"
                title="Free Shipping - $0.00"
                setter={setDelivery}
              />
            </div>
            <div className="relative block -mt-1 mb-2 ">
              <RadioBox
                selected={deliveryMethod}
                value="flat"
                title="Flat Shipping Rate - $7.50"
                setter={setDelivery}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 float-right px-4 relative">
          <div className="px-3 py-2">
            <h4 className="text-base text-inherit my-0 leading-none font-medium">
              <i className="fa fa-credit-card"></i> Payment Method
            </h4>
          </div>
          <div className="p-4 text-xs space-y-3">
            <p>
              Please select the preferred payment method to use on this order.
            </p>
            <div className="my-2 relative block">
              <RadioBox
                selected={paymentMethod}
                value="cash"
                title="Cash On Delivery"
                setter={setPayment}
              />
            </div>
            <div className="relative block -mt-1 mb-2">
              <RadioBox
                selected={paymentMethod}
                value="paypal"
                title="Cash On Delivery"
                setter={setPayment}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CouponVoucher() {
  const [coupon, setCoupon] = useState('')
  const [voucher, setVoucher] = useState('')

  return (
    <div className="w-full float-left px-4 relative box-border text-xs leading-5">
      <div className="inline-block rounded box-border pb-4 bg-white border border-solid mb-5 px-0 shadow-sm w-full">
        <div className="px-2 py-2 bg-gray-100 border-b-transparent">
          <h4 className="text-inherit text-base my-0 font-medium leading-tight">
            <i className="fa fa-ticket"></i> Do you Have a Coupon or Voucher?
          </h4>
        </div>
        <div className="p-4 -mx-4 leading-6">
          <div className="float-left w-1/2 px-4 relative box-border ">
            <div className="border-separate table relative w-full">
              <BaseInput
                value={coupon}
                setter={setCoupon}
                placeholder="Enter your coupon here"
              />
              <span className="whitespace-nowrap align-middle table-cell border-separate">
                <input
                  type="button"
                  className="cursor-pointer  bg-blue-1 hover:bg-blue-2 text-white border-transparent 
                    align-middle text-center leading-normal font-normal text-sm inline-block -ml-1 mt-1 px-2 h-9"
                  value="Apply Coupon"
                />
              </span>
            </div>
          </div>
          <div className="float-left w-1/2 relative box-border ">
            <div className="border-separate table w-full relative">
              <BaseInput
                value={voucher}
                setter={setVoucher}
                placeholder="Enter your gift voucher code here"
              />
              <span className="whitespace-nowrap align-middle table-cell border-separate">
                <input
                  type="button"
                  className="cursor-pointer bg-blue-1 hover:bg-blue-2 text-white align-middle text-center 
                    leading-normal font-normal text-sm inline-block mt-1 -ml-1 px-2 h-9"
                  value="Apply Voucher"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ShoppingCart() {
  const [quantity, setQauntity] = useState(1)
  const handleRemove = () => {}
  const handleUpdate = () => {}
  return (
    <div className="w-full float-left px-4 relative box-border text-xs leading-5">
      <div className="box-border pb-4 bg-white border border-solid px-0 shadow-sm inline-block w-full rounded mb-5">
        <div className="px-2 py-2 bg-gray-100 border-b-transparent">
          <h4 className="text-base my-0 font-medium">
            <i className="fa fa-shopping-cart"></i> Shopping cart
          </h4>
        </div>
        <div className="p-4 box-border">
          <div className="overflow-x-auto">
            <table className="mb-3 w-full max-w-full text-neutral-600 bg-transparent border border-solid border-collapse border-spacing-0 box-border">
              <thead className="px-2 py-2 bg-gray-100 border-b-transparent h-10">
                <tr className="font-bold ">
                  <td className="text-center">Image</td>
                  <td className="text-left">Product Name</td>
                  <td className="text-left">Quantity</td>
                  <td className="text-right">Unit Price</td>
                  <td className="text-right">Total</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-solid align-top leading-snug p-2 text-center box-border border-collapse border-spacing-0">
                    <a href="product.html">
                      <img
                        width="60px"
                        src={image}
                        alt="Xitefun Causal Wear Fancy Shoes"
                        title="Xitefun Causal Wear Fancy Shoes"
                        className="transition-all rounded p-1 border-solid border-gray-400
                        max-w-full inline-block align-middle h-auto text-center border-separate border-spacing-0"
                      />
                    </a>
                  </td>
                  <td className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    <a href="product.html">Emasa rumas gacem</a>
                  </td>
                  <td className="text-left border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    <div className="border-separate table relative min-w-full">
                      <input
                        type="text"
                        className="table w-full px-3 h-9 transition duration-150 ease-in-out border-2 rounded-l-sm shadow-sm
                         focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue
                       focus:border-blue-300 sm:text-sm sm:leading-5"
                        id="input-voucher"
                        placeholder="Enter your gift voucher code here"
                        name="quantity"
                        value="1"
                        size="1"
                        onChange={(e) => setQauntity(e, target.value)}
                      />
                      <span
                        className="whitespace-nowrap align-middle table-cell"
                        style={{ width: 1 + '%' }}
                      >
                        <Tippy content={<span> Update</span>}>
                          <button
                            type="submit"
                            className="cursor-pointer bg-blue-1 hover:bg-blue-2 text-white align-middle text-center 
                          leading-normal font-normal text-sm inline-block px-4 h-9"
                            onClick={handleUpdate}
                          >
                            <i className="fa fa-refresh"></i>
                          </button>
                        </Tippy>
                        <Tippy content={<span>Remove</span>}>
                          <button
                            type="button"
                            data-toggle="tooltip"
                            title=""
                            className="cursor-pointer bg-red-600 hover:bg-red-700 text-white align-middle text-center 
                          leading-normal font-normal text-sm inline-block  px-4 h-9"
                            onClick={handleRemove}
                          >
                            <i className="fa fa-times-circle"></i>
                          </button>
                        </Tippy>
                      </span>
                    </div>
                  </td>
                  <td className="text-right border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    $114.35
                  </td>
                  <td className="text-right border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    $114.35
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    className="text-right border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0"
                    colspan="4"
                  >
                    <strong>Sub-Total:</strong>
                  </td>
                  <td className="text-right">$93.73</td>
                </tr>
                <tr>
                  <td
                    className="text-right border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0"
                    colspan="4"
                  >
                    <strong>Flat Shipping Rate:</strong>
                  </td>
                  <td className="text-right border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    $4.69.00
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-right border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0"
                    colspan="4"
                  >
                    <strong>Eco Tax (-2.00):</strong>
                  </td>
                  <td className="text-right border border-solid align-top leading-snug p-2 box-border border-collapse border-spacing-0">
                    $3.75.00
                  </td>
                </tr>
                <tr>
                  <td className="text-right" colspan="4">
                    <strong>VAT (20%):</strong>
                  </td>
                  <td className="text-right">$19.68</td>
                </tr>
                <tr>
                  <td className="text-right" colspan="4">
                    <strong>Total:</strong>
                  </td>
                  <td className="text-right">$121.85</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function AddComment() {
  const handleConfirm = () => {}
  const [comment, setComment] = useState('')
  return (
    <div className="w-full float-left px-4 relative box-border text-xs leading-5">
      <div className="box-border pb-4 bg-white border border-solid px-0 shadow-sm inline-block w-full rounded mb-5">
        <div className="px-2 py-2 bg-gray-100 border-b-transparent">
          <h4 className="my-0 text-base font-medium">
            <i className="fa fa-pencil"></i> Add Comments About Your Order
          </h4>
        </div>
        <div
          className="pt-4 mb-4 box-border"
          style={{ width: 95 + '%', margin: '0 auto' }}
        >
          <textarea
            className="px-3 mb-5 resize-none overflow-auto m-0 border-solid text-xs
             border-gray-1 bg-none block h-auto w-full py-5 mt-1 transition duration-15 
             ease-in-out border rounded shadow-sm focus:shadow-blue-300 focus:outline-none 
              focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            id="confirm_comment"
            name="comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <label>
            <input type="checkbox" />
            <span className="text-neutral-600 ml-1">
              I have read and agree to the
              <a
                className="ml-1 outline-none cursor-pointer bg-transparent  ease-in-out"
                href="#"
              >
                <b>Terms &amp; Conditions</b>
              </a>
            </span>
          </label>
          <div className="box-border">
            <div className="float-right">
              <input
                type="button"
                className="cursor-pointer touch-manipulation bg-blue-1 hover:bg-blue-2 border-blue-2 select-none bg-none text-white border border-transparent
                   align-middle whitespace-nowrap text-center leading-snug font-normal text-sm 
                   mb-0 pt-1 px-3 inline-block m-0 h-9"
                value="Confirm Order"
                onClick={handleConfirm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Checkout() {
  return (
    <div
      className="container p-0 overflow-visible mx-auto box-border text-gray-2 leading-6 text-sm justify-center"
      style={{ width: 95 + '%', margin: '0 auto' }}
    >
      <ul className="flex list-none my-6 leading-normal rounded bg-transparent p-0 space-x-3 w-full ">
        <li className="relative py-0">
          <a href="#">
            <i className="fa fa-home ml-2 text-gray-400 hover:text-blue-3"></i>
          </a>
        </li>
        <li>{'>'}</li>
        <li className="text-primary">
          <a href="#">Checkout</a>
        </li>
      </ul>
      <div className="w-full pb-0">
        <h2 className="text-xl mt-9 font-light leading-none">Checkout</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-neutral-700 py-4 min-h-screen">
        <div className="col-span-3">
          <UserAccount />
          <PersonalDetail />
          <PersonalAddress />
        </div>
        <div className="col-span-9">
          <DeliPayMethod />
          <CouponVoucher />
          <ShoppingCart />
          <AddComment />
        </div>
      </div>
    </div>
  )
}
