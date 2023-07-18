import BaseInput from '../components/controlled/BaseInput'
import Label from '../components/my_account/Label'
import AccountSiteMap from '../components/my_account/AccountSiteMap'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleVisibility, setPath } from '../store/slices/breadcrumbSlice'
import { useEffect } from 'react'
import { http } from '../services/http/http'

function MyAccount() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const name = 'Jhone Cary!'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // update Account function
  const updateAccount = async (data) => {
    setLoading(true)
    if (data.newPassword !== data.repeatPassword) {
      setError('Passwords do not match')
      return
    }

    const response = await http.request({ method: 'put', url: 'account', data })
    if (!response.isError) {
    } else {
      setError(error.toString())
    }
    setLoading(false)
  }

  //Start Breadcrumb
  const dispatch = useDispatch()

  const hideBreadcrumb = () => {
    dispatch(toggleVisibility({ hidden: true }))
    dispatch(setPath({ path: [] }))
  }
  const showBreadCrumb = () => {
    dispatch(
      setPath({
        path: [
          { title: 'Account', path: '/my_account' },
          { title: 'My Account', path: '/my_account' },
        ],
      })
    )
    dispatch(toggleVisibility({ hidden: false }))
  }
  useEffect(() => {
    showBreadCrumb()
    return hideBreadcrumb
  }, [])
  //End Breadcrumb

  return (
    <div className="px-5 lgp8:max-w-[1650px] lgp8:w-[95%] mx-auto text-xs text-gray-2 font-body leading-6">
      <div className="flex">
        <div className=" w-full sm:w-[80%]">
          <div className="text-xl mb-6 mt-5">
            <h2 className="mb-2 font-medium">My Account</h2>
            <p className="leading-normal">
              Hello, <span className="font-bold">{name}</span> - To update your
              account information.
            </p>
          </div>
          <form onSubmit={handleSubmit(updateAccount)}>
            <div className="sm:flex sm:flex-col">
              <div className="sm:flex">
                {/* Personal details form */}
                <div className="w-full pr-8 mb-9">
                  <h3 className="text-lg text-gray-800">Personal Details</h3>
                  <hr className="mb-5" />
                  <div className="mb-4">
                    <Label name="First Name" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="First Name"
                      sm="false"
                      {...register('firstName', { required: true })}
                    />
                    {errors.firstName && (
                      <span className="text-red-400 mt-2 text-xs">
                        Firstname is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="Last Name" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Last Name"
                      sm="false"
                      {...register('lastName', { required: true })}
                    />
                    {errors.lastName && (
                      <span className="text-red-400 mt-2 text-xs">
                        Latname is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="Email" required={true}></Label>
                    <BaseInput
                      type="email"
                      placeholder="E-mail"
                      sm="false"
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-400 mt-2 text-xs">
                        Email is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="Telephone" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Telephone"
                      sm="false"
                      {...register('telephone', { required: true })}
                    />
                    {errors.telephone && (
                      <span className="text-red-400 mt-2 text-xs">
                        Telephone is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="Fax" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Fax"
                      sm="false"
                      {...register('fax', { required: true })}
                    />
                    {errors.fax && (
                      <span className="text-red-400 mt-2 text-xs">
                        Fax is required
                      </span>
                    )}
                  </div>
                </div>
                {/* Change password form*/}
                <div className="w-full pr-8 mb-9">
                  <h3 className="text-lg text-gray-800">Change Password</h3>
                  <hr className="mb-5" />

                  <div className="mb-4">
                    <Label
                      name="Old Password"
                      required={true}
                      className=""
                    ></Label>
                    <BaseInput
                      type="password"
                      placeholder="Old Password"
                      sm="false"
                      {...register('oldPassword', { required: true })}
                    />
                    {errors.oldPassword && (
                      <span className="text-red-400 mt-2 text-xs">
                        Old password is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="New Password" required={true}></Label>
                    <BaseInput
                      type="password"
                      placeholder="New Password"
                      sm="false"
                      {...register('newPassword', { required: true })}
                    />
                    {errors.newPassword && (
                      <span className="text-red-400 mt-2 text-xs">
                        New password is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="New Password Confirm" required={true}></Label>
                    <BaseInput
                      type="password"
                      placeholder="New Password Confirm"
                      sm="false"
                      {...register('repeatPassword', { required: true })}
                    />
                    {errors.repeatPassword && (
                      <span className="text-red-400 mt-2 text-xs">
                        Repeat password is required
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg text-gray-800">Newsletter</h3>
                    <hr className="mb-5" />
                    <div className=" mb-4 sm:space-x-4">
                      <span>Subscribe</span>
                      <input
                        type="radio"
                        value="yes"
                        className="outline-none focus-within:border-2 pl-3  border border-gray-300 rounded py-2  text-sm"
                        {...register('subscribe')}
                      />
                      &nbsp;Yes
                      <input
                        type="radio"
                        value="no"
                        className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2  text-sm"
                        {...register('subscribe', { required: true })}
                        checked
                      />
                      &nbsp; No
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:flex">
                {/* Payment address form */}
                <div className="w-full pr-7">
                  <h3 className="text-lg text-gray-800">Payment Address</h3>
                  <hr className="mb-5" />

                  <div className="mb-4">
                    <Label name="Company"></Label>
                    <BaseInput
                      type="text"
                      placeholder="Company"
                      sm="false"
                      {...register('paymentAddress_company', {
                        required: true,
                      })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="Address 1" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Address 1"
                      sm="false"
                      {...register('paymentAddress_address', {
                        required: true,
                      })}
                    />
                    {errors.paymentAdress_address && (
                      <span className="text-red-400 mt-2 text-xs">
                        Address is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="City" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="City"
                      sm="false"
                      {...register('paymentAddress_city', { required: true })}
                    />
                    {errors.paymentAdress_city && (
                      <span className="text-red-400 mt-2 text-xs">
                        City is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="Post Code" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Post Code"
                      sm="false"
                      {...register('paymentAddress_postCode', {
                        required: true,
                      })}
                    />
                    {errors.paymentAdress_postCode && (
                      <span className="text-red-400 mt-2 text-xs">
                        Post code is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="State" required={true}></Label>
                    <select
                      className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border rounded-md shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      {...register('paymentAddress_state', { required: true })}
                    >
                      <option selected disabled>
                        Select your state
                      </option>
                      <option value="North Chungcheong">
                        North Chungcheong
                      </option>
                      <option vaue="South Chungcheong">
                        South Chungcheong
                      </option>
                      <option value="Gangwon, Gyeonggi">
                        Gangwon, Gyeonggi
                      </option>
                      <option value="North Gyeongsang">North Gyeongsang</option>
                      <option value="South Gyeongsang">South Gyeongsang</option>
                      <option value="North Jeolla">North Jeolla</option>
                      <option value="South Jeolla">South Jeolla</option>
                      <option value="Jeju">Jeju</option>
                    </select>
                    {errors.paymentAdress_state && (
                      <span className="text-red-400 mt-2 text-xs">
                        State is required
                      </span>
                    )}
                  </div>
                </div>
                {/* Shipping Address form */}
                <div className="w-full pr-7">
                  <h2 className="text-lg text-gray-800">Shipping Address</h2>
                  <hr className="mb-5" />
                  <div className="mb-4">
                    <Label name="Company"></Label>
                    <BaseInput
                      type="text"
                      placeholder="Company"
                      sm="false"
                      {...register('shippingAddress_company', {
                        required: true,
                      })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="Address 1" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Address 1"
                      sm="false"
                      {...register('shippingAddress_address', {
                        required: true,
                      })}
                    />
                    {errors.shippingAddress_address && (
                      <span className="text-red-400 mt-2 text-xs">
                        Address is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="City" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="City"
                      sm="false"
                      {...register('shippingAddress_city', { required: true })}
                    />
                    {errors.shippingAddress_city && (
                      <span className="text-red-400 mt-2 text-xs">
                        City is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label name="Post Code" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Post Code"
                      sm="false"
                      {...register('shippingAddress_postCode', {
                        required: true,
                      })}
                    />
                    {errors.shippingAddress_postCode && (
                      <span className="text-red-400 mt-2 text-xs">
                        Post code is required
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <Label name="State" required={true}></Label>
                    <select
                      className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border rounded-md shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      {...register('shippingAddress_state', { required: true })}
                    >
                      <option selected disabled>
                        Select your state
                      </option>
                      <option value="North Chungcheong">
                        North Chungcheong
                      </option>
                      <option vaue="South Chungcheong">
                        South Chungcheong
                      </option>
                      <option value="Gangwon, Gyeonggi">
                        Gangwon, Gyeonggi
                      </option>
                      <option value="North Gyeongsang">North Gyeongsang</option>
                      <option value="South Gyeongsang">South Gyeongsang</option>
                      <option value="North Jeolla">North Jeolla</option>
                      <option value="South Jeolla">South Jeolla</option>
                      <option value="Jeju">Jeju</option>
                    </select>
                    {errors.shippingAddress_state && (
                      <span className="text-red-400 mt-2 text-xs">
                        State is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="float-right mt-2 mb-5 pr-7">
              <button
                type="submit"
                className="bg-blue-2 text-white text-sm font-normal px-3 py-1.5 focus:border-blue-300 "
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <div className="sm:w-[20%] hidden sm:block">
          {/* Site Map */}
          <AccountSiteMap />
        </div>
      </div>
    </div>
  )
}
export default MyAccount
