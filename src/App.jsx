import { useSelector } from 'react-redux'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import NotFound from './components/NotFound'
import Home from './pages/Home.jsx'
import Footer from './components/layout/Footer'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import WishList from './pages/WishList'
import OrderInfo from './pages/OrderInfo'
import Protected from './components/route-hocs/Protected'
import OnlyWhenLoggedOut from './components/route-hocs/OnlyWhenLoggedOut'
import Register from './pages/Register'
import ProductReturn from './pages/ProductReturn'
import MyAccount from './pages/MyAccount'
import Cart from './pages/Cart'
import Product from './pages/Product'
import OrderHistory from './pages/OrderHistory'
import Contact from './pages/Contact'
import Category from './pages/Category'

function App() {
  const header = useSelector((state) => state.header)
  const footer = useSelector((state) => state.footer)

  return (
    <div className="h-screen">
      {!header.hidden && <Header />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<OnlyWhenLoggedOut component={Login} />} />
        <Route path="register" element={<Register />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="wish_list" element={<WishList />} />
        <Route path="order_info" element={<OrderInfo />} />
        <Route path="product_return" element={<ProductReturn />} />
        <Route path="my_account" element={<MyAccount />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<Product />} />
        <Route path="order_history" element={<OrderHistory />} />
        <Route path="contact_us" element={<Contact />} />
        <Route path="category" element={<Category />} />
        {/* <Route path="test" element={<Test />} /> */}
        <Route path="go-responsive" element={<div>here we go</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!footer.hidden && <Footer />}
    </div>
  )
}

export default App
