export default function AccountSiteMap() {
  return (
    <aside>
      <h2 className="text-xl mb-2 mt-5">Account</h2>
      <div className="">
        <ul>
          <li className="mb-3">
            <a href="/login">Login</a>
          </li>
          <li className="mb-3">
            <a href="/register">Register</a>
          </li>
          <li className="mb-3">
            <a href="#">Forgotten Password </a>
          </li>
          <li className="mb-3">
            <a href="/my_account">My Account</a>
          </li>
          <li className="mb-3">
            <a href="#">Wish List</a>
          </li>
          <li className="mb-3">
            <a href="#">Order History</a>
          </li>
          <li className="mb-3">
            <a href="#">Downloads</a>
          </li>
          <li className="mb-3">
            <a href="#">Reward Points</a>
          </li>
          <li className="mb-3">
            <a href="#">Returns</a>
          </li>
          <li className="mb-3">
            <a href="#">Transactions</a>
          </li>
          <li className="mb-3">
            <a href="#">Newsletter</a>
          </li>
          <li className="mb-3">
            <a href="#">Recurring payments</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
