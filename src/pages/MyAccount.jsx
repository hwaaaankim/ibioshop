import Icon from '../components/icon/Icon'
import BaseInput from '../components/controlled/BaseInput'
import Label from '../components/my_account/Label'
import AccountSiteMap from '../components/my_account/AccountSiteMap'
import { useForm } from 'react-hook-form'

function MyAccount() {
  const name = 'Jhone Cary!'
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  return (
    <div className="px-8 sm:px-16 lg:px-8 sm:text-sm lg:text-xs my-account">
      <ul className="flex flex-row mb-4 mt-7 text-gray-400">
        <li>
          <a href="/">
            <Icon className="" size="12" id="home"></Icon>
          </a>
        </li>
        <Icon className="mt-2 mx-2" id="chevronRight" size="10"></Icon>
        <li>
          <a href="/account">Account</a>
        </li>
        <Icon className="mt-2 mx-2" id="chevronRight" size="10"></Icon>
        <li>
          <a href="/my_account">My Account</a>
        </li>
      </ul>
      <div className="flex">
        <div className="w-full sm:w-3/4 ">
          <div className="text-xl mb-6 mt-5">
            <h2 className="mb-2">My Account</h2>
            <p className="leading-normal">
              Hello, <span className="font-bold">{name}</span> - To update your
              account information.
            </p>
          </div>
          <form>
            <div className="sm:flex sm:flex-col">
              <div className="sm:flex">
                <div className="w-full pr-8 mb-9">
                  <h3 className="text-lg text-gray-800">Personal Details</h3>
                  <hr className="mb-5" />
                  <div className="mb-4">
                    <Label name="First Name" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="First Name"
                      sm={false}
                      {...register('firstName', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="Last Name" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Last Name"
                      sm={false}
                      {...register('lastName', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="Email" required={true}></Label>
                    <BaseInput
                      type="email"
                      placeholder="E-mail"
                      sm={false}
                      {...register('email', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="Telephone" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Telephone"
                      sm={false}
                      {...register('telephone', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="Fax" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Fax"
                      sm={false}
                      {...register('fax', { required: true })}
                    />
                  </div>
                </div>
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
                      sm={false}
                      {...register('oldPassword', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="New Password" required={true}></Label>
                    <BaseInput
                      type="password"
                      placeholder="New Password"
                      sm={false}
                      {...register('newPassword', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="New Password Confirm" required={true}></Label>
                    <BaseInput
                      type="password"
                      placeholder="New Password Confirm"
                      sm={false}
                      {...register('repeatPassword', { required: true })}
                    />
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
                        {...register('subscribe', { required: true })}
                      />{' '}
                      Yes
                      <input
                        type="radio"
                        value="no"
                        className="outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2  text-sm"
                        {...register('subscribe', { required: true })}
                      />{' '}
                      No
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:flex">
                <div className="w-full pr-7">
                  <h3 className="text-lg text-gray-800">Payment Address</h3>
                  <hr className="mb-5" />

                  <div className="mb-4">
                    <Label name="Company"></Label>
                    <BaseInput
                      type="text"
                      placeholder="Company"
                      sm={false}
                      {...register('company', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="Address 1" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Address 1"
                      sm={false}
                      {...register('address', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="City" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="City"
                      sm={false}
                      {...register('city', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="Post COde" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Post Code"
                      sm={false}
                      {...register('postCode', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="State" required={true}></Label>
                    <select
                      className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border rounded-md shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      {...register('state', { required: true })}
                    >
                      <option selected disabled>
                        Select your state
                      </option>
                      <option value="seoul">Seoul</option>
                    </select>
                  </div>
                </div>
                <div className="w-full pr-7">
                  <h2 className="text-lg text-gray-800">Shipping Address</h2>
                  <hr className="mb-5" />
                  <div className="mb-4">
                    <Label name="Company"></Label>
                    <BaseInput
                      type="text"
                      placeholder="Company"
                      sm={false}
                      {...register('company', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="Address 1" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Address 1"
                      sm={false}
                      {...register('address', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="City" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="City"
                      sm={false}
                      {...register('city', { required: true })}
                    />
                  </div>

                  <div className="mb-4">
                    <Label name="Post Code" required={true}></Label>
                    <BaseInput
                      type="text"
                      placeholder="Post Code"
                      sm={false}
                      {...register('postCode', { required: true })}
                    />
                  </div>
                  <div className="mb-4">
                    <Label name="State" required={true}></Label>
                    <select
                      className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border rounded-md shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      {...register('state', { required: true })}
                    >
                      <option selected disabled>
                        Select your state
                      </option>
                      <option value="North Chungcheong">North Chungcheong</option> 
                      <option vaue="South Chungcheong">South Chungcheong</option>
                      <option value="Gangwon, Gyeonggi">Gangwon, Gyeonggi</option>
                      <option value="North Gyeongsang">North Gyeongsang</option>
                      <option value="South Gyeongsang">South Gyeongsang</option>
                      <option value="North Jeolla">North Jeolla</option>
                      <option value="South Jeolla">South Jeolla</option>
                      <option value="Jeju">Jeju</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-right mt-2 mb-5 pr-7">
              <button
                type="submit"
                className="bg-blue-2 text-white text-sm font-normal px-3 py-1.5 focus:border-blue-300 "
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <div className="sm:w-1/4 hidden sm:block">
          <AccountSiteMap />
        </div>
      </div>
    </div>
  )
}
export default MyAccount
