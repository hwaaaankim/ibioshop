import { Link } from 'react-router-dom'
export default function AccountSiteMap() {
  return (
    <aside>
      <h2 className="text-xl leading-none  font-medium mb-2 mt-5">Account</h2>
      <div className="text-xs font-light text-gray-700">
        <ul className="leading-6">
          <li className="mb-2">
            <Link to="/login">Login</Link>
          </li>
          <li className="mb-2">
            <Link to="/register">Register</Link>
          </li>
          <li className="mb-2">
            <Link to="/forget_password">Forgotten Password </Link>
          </li>
          <li className="mb-2">
            <Link to="/my_account">My Account</Link>
          </li>
          <li className="mb-2">
            <Link to="/address_book">Address Books</Link>
          </li>
          <li className="mb-2">
            <Link to="/wish_list">Wish List</Link>
          </li>
          <li className="mb-2">
            <Link to="/order_history">Order History</Link>
          </li>
          <li className="mb-2">
            <Link to="/downloads">Downloads</Link>
          </li>
          <li className="mb-2">
            <Link to="/reward_point">Reward Points</Link>
          </li>
          <li className="mb-2">
            <Link to="/product_return">Returns</Link>
          </li>
          <li className="mb-2">
            <Link to="/transaction">Transactions</Link>
          </li>
          <li className="mb-2">
            <Link to="/newsletter">Newsletter</Link>
          </li>
          <li className="mb-2">
            <Link to="/recurring_payment">Recurring payments</Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
