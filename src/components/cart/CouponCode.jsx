import { useForm } from "react-hook-form";
import BaseInput from "../controlled/BaseInput";

function CouponCode() { 

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const applyCoupon = async(data) => {
        console.log(data)
        // await cart.applyCoupon(data)
    }

        return (
          <div className="w-full float-left mt-4 relative box-border text-xs leading-5">
            <div className="box-border pb-4 bg-white border border-solid px-0 shadow-sm inline-block w-full rounded mb-5">
              <div className="px-2 py-2 bg-gray-100 border-b-transparent">
                <h4 className="my-0 text-base font-medium">
                 Use Coupon Code <i className="fa fa-caret-down"></i>
                </h4>
              </div>
              <div className="flex border-separate relative w-full">
              <form className="flex mt-2 justify-between w-full" onSubmit={handleSubmit(applyCoupon)}>
              <span className="mt-3 w-1/3 px-4">Enter your coupon here</span>
              <span className="flex mr-2 w-8/12">
              <div className="w-full">
              <BaseInput
                className='block h-9 w-full px-3 mt-1 transition duration-150 ease-in-out border border-gray-1 rounded-md inset-px shadow-sm focus:shadow-blue-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
                {...register("coupon", { required: true })}
                placeholder="Enter your coupon here"
              />
              </div>
              {errors.coupon && <span className='text-red-400 mt-2 text-xs'>Firstname is required</span>}
              <span className="whitespace-nowrap align-middle table-cell border-separate">
                <input
                  type="submit"
                  className="cursor-pointer  bg-blue-1 hover:bg-blue-2 text-white border-transparent 
                    align-middle text-center leading-normal font-normal text-sm inline-block -ml-1 mt-1 px-2 h-9"
                  value="Apply Coupon"
                />
              </span>
              </span>
              </form>
            </div>
              </div>
            </div>
        )
      }
export default CouponCode