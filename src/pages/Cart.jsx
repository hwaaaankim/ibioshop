import Icon from "../components/icon/Icon"
import ShoppingCartTable from "../components/cart/ShoppingCartTable"
import Total from "../components/cart/Total"
import CouponCode from "../components/cart/CouponCode"


function Cart() {

    return <div className="sm:mx-10 mx-3 my-4 pb-2 sm:text-sm lg:text-xs">
        <ul className="flex flex-row mb-4 mt-7 text-gray-400">
        <li>
          <a href="/">
            <Icon className="" size="12" id="home"></Icon>
          </a>
        </li>
        <Icon className="mt-0.5 mx-2" id="chevronRight" size="10"></Icon>
        <li className="">
          <a href="/cart">Shopping Cart</a>
        </li>
      </ul>
      <div>
        <h2 className="text-lg font-semibold text-gray-500 pb-2">Shopping Cart</h2>
        <ShoppingCartTable></ShoppingCartTable>
        <h2 className="text-lg font-semibold text-gray-500">What would you like to do next?</h2>
        <span>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</span>
        <CouponCode></CouponCode>
        <Total></Total>
        <div className="flex justify-around"> 
          <button>Continue Shopping</button>
          <button>Checkout</button>
        </div>
        <div className="h-60"></div>
      </div>
    </div>
}

export default Cart