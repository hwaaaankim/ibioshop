import { useForm } from 'react-hook-form'
import BaseInput from '../components/controlled/BaseInput'

function AccountRegistrationIntro() {
  return (
    <div className="border border-gray-300 flex flex-col justify-between">
      <div className="space-y-5 p-5 my-5 text-gray-600">
        <div className="flex items-center space-x-1">
          <i className="fa fa-file-o" style={{ fontSize: 14 }} />
          <div className="uppercase text-gray-800 text-sm">new customer</div>
        </div>
        <div className="text-sm">
          By creating an account you will be able to shop faster, be up to date
          on an order's status, and keep track of the orders you have previously
          made.
        </div>
      </div>

      <div className="flex justify-end p-2 py-3 bg-gray-100">
        <di
          className="py-2 px-4 rounded text-white text-sm"
          style={{ background: '#333' }}
        >
          Continue
        </di>
      </div>
    </div>
  )
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const handleLogin = (data) => console.log(data)

  return (
    <div className="border border-gray-300 flex flex-col justify-between">
      <div className="p-5 my-5 text-gray-600 space-y-3">
        <div className="space-y-5">
          <div className="flex items-center space-x-1">
            <i className="fa fa-file-text-o" style={{ fontSize: 14 }} />
            <div className="uppercase text-gray-800 text-sm">
              Returning customer
            </div>
          </div>
          <div className="text-sm font-semibold">I am a returning customer</div>
        </div>

        <div className="space-y-2">
          <div>
            <BaseInput
              label="E-Mail Address"
              {...register('email', { required: true })}
            />
            {errors.email && <span>E-Mail Address is required</span>}
          </div>

          <div>
            <BaseInput
              type="password"
              label="Password"
              {...register('password', { required: true })}
            />
            {errors.password && <span>Password is required</span>}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-2 py-3 bg-gray-100">
        <div
          className="cursor-pointer hover:text-primary"
          style={{ fontSize: 13 }}
        >
          Forgotten Password
        </div>
        <div
          className="py-2 px-4 rounded text-white text-sm"
          style={{ background: '#333' }}
          onClick={handleSubmit(handleLogin)}
        >
          Login
        </div>
      </div>
    </div>
  )
}

export default function Login() {
  return (
    <div
      className="grid grid-cols-2 gap-8 py-4"
      style={{ width: 95 + '%', margin: '0 auto' }}
    >
      <AccountRegistrationIntro />
      <LoginForm />
    </div>
  )
}
