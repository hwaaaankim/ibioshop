import Icon from '../components/icon/Icon'
import CheckBox from '../components/controlled/CheckBox'
import Label from '../components/controlled/Label'
import { useForm } from "react-hook-form";


function Register() {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const error = ''

    const handleRegistration = (data) => {
        console.log(data)
        if (data.password !== data.repeat_password) {
            setError('Passwords dont match')
            return
        }
    }

    return <div className="sm:mx-10 mx-3 mt-4">
        <ul className="flex flex-row mb-4 text-gray-400">
            <Icon className='mt-1.5' size='12' id="home"></Icon><li><a href="/"></a></li>
            <Icon className='mt-2 mx-2' id="chevronRight" size='10'></Icon><li><a href="/account">Account</a></li>
            <Icon className='mt-2 mx-2' id="chevronRight" size='10'></Icon><li><a href="/register">Register</a></li>
        </ul>
        <h2 className='text-gray-700 font-normal '>Register Account</h2>
        <p className='mt-2'>If you already have an account with us, please login at <a href="/login">the login page.</a> </p>
        <h2 className="mt-4 mb-2">Your Personal Details</h2>
        <hr className='mb-6'></hr>
        {/* PERSONAL DETAILS */}
        <form className='mb-10' onSubmit={handleSubmit(handleRegistration)}>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='Firstname'></Label>
            <input className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("firstName", { required: true })} />
            {errors.firstName && <span className='text-red-400 text-sm'>Firstname is required</span>}
        </div>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='Lastname'></Label>
            <input className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("lastName", { required: true })} />
            {errors.lastname && <span className='text-red-400 text-sm'>Lastname is required</span>}
        </div>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='Email'></Label>
            <input className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("email", { required: true })} />
            {errors.email && <span className='text-red-400 text-sm'>Email is required</span>}
        </div>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='Telephone'></Label>
            <input className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("telephone", { required: true })} />
            {errors.telephone && <span className='text-red-400 text-sm'>Telephone is required</span>}
        </div>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label className='mt-4' name='Fax'></Label>
            <input type='number' className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("fax")} />
        </div>
        <h2 className="mt-4 mb-2">Your Address</h2>
        <hr className='mb-6'></hr>
        {/* <Address></Address> */}
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='Company'></Label>
            <input className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("company")} />
            {errors.company && <span className='text-red-400 text-sm'>Company is required</span>}
        </div>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='Address 1'></Label>
            <input className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("address1", { required: true })} />
            {errors.address1 && <span className='text-red-400 text-sm'>Address is required</span>}
        </div>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label className='mt-4' name='Address 2'></Label>
            <input className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("address2", { required: true })} />
        </div>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='City'></Label>
            <input className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("city", { required: true })} />
            {errors.city && <span className='text-red-400 text-sm'>City is required</span>}
        </div>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='Postcode'></Label>
            <input type='number' className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("postcode", { required: true })} />
            {errors.postcode && <span className='text-red-400 text-sm'>Postcode is required</span>}
        </div>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='State'></Label>
            <select className='w-full focus-within:border-2 pl-3 border border-gray-300 rounded py-2 pr-5' {...register("state", { required: true })}>
                <option selected disabled>Select your state</option>
                <option value='seoul'>Seoul</option>
            </select>
            {errors.state && <span className='text-red-400 text-sm'>State is required</span>}
        </div>
        <h2 className="mt-4 mb-2">Your Password</h2>
        <hr className='mb-6'></hr>
        {/* <Password></Password> */}
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='Password'></Label>
            <input type='password' className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("password", { required: true })} />
            {errors.password && <span className='text-red-400 text-sm'>Password is required</span>}
        </div>
        <div className='sm:flex mb-4 sm:space-x-4'>
            <Label required={true} className='mt-4' name='Repeat Password'></Label>
            <input type='password' className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2 w-full text-sm' {...register("repeat_password", { required: true })} />
            {errors.repeat_password && <span className='text-red-400 text-sm'>Confirm your password again</span>}
        </div>
        <h2 className="mt-4 mb-2">Newsletter</h2>
        <hr className='mb-6'></hr>
        {/* <NewsLetter></NewsLetter> */}
        <div className='sm:flex mb-4 sm:space-x-4'>
        <span>Subscribe</span>
        <input type='radio' value='yes' className='outline-none focus-within:border-2 pl-3  border border-gray-300 rounded py-2  text-sm' {...register("password", { required: true })} /> Yes
        <input type='radio' value='no' className='outline-none focus-within:border-2 pl-3 border border-gray-300 rounded py-2  text-sm' {...register("password", { required: true })} /> No
        </div> 
        <div className='mb-10 flex space-x-2 text-m'>
            <span>I have read and agree to the<a>Pricing Tables</a></span>
            <CheckBox></CheckBox>
            { error }
            <button type='submit' value='Register' className='bg-blue-800 px-5 font-thin text-sm ml-4 text-white py-0.5'>Register</button>
        </div>
        </form>
    </div>;
}

export default Register;