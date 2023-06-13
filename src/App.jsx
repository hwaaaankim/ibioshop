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
import MyAccount from './pages/MyAccount'
import Cart from './pages/Cart'
import Product from './pages/Product'
import GiftVoucher from './pages/GiftVoucher'
import OrderHistory from './pages/OrderHistory'
import Contact from './pages/Contact'
import Test from './components/product/QuickViewModal'
import Aboutus from './pages/Aboutus'
import Category from './pages/Category'
import Blog from './pages/Blog'
import Breadcrumb from './components/layout/Breadcrumb'
import BlogDetail from './pages/BlogDetail'

function App() {
  const header = useSelector((state) => state.header)
  const footer = useSelector((state) => state.footer)
  const breadcrumb = useSelector((state) => state.breadcrumb)

  return (
    <div className="h-screen">
      {!header.hidden && <Header />}
      {!breadcrumb.hidden && <Breadcrumb />}
      <Routes>
        <Route exact path="/" element={<Protected component={<Home />} />} />
        <Route path="login" element={<OnlyWhenLoggedOut component={Login} />} />
        <Route path="register" element={<Register />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="wish_list" element={<WishList />} />
        <Route path="order_info" element={<OrderInfo />} />
        <Route path="my_account" element={<MyAccount />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="about" element={<Aboutus/>} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<Product />} />
        <Route path="order_history" element={<OrderHistory />} />
        <Route path="contact_us" element={<Contact />} />
        <Route path="gift_voucher" element={<GiftVoucher />} />
        <Route path="test" element={<Test />} />
        <Route path="category" element={<Category />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-detail" element={<BlogDetail />} />
        <Route path="go-responsive" element={<div>go responsive</div>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {!footer.hidden && <Footer />}
    </div>
  )
}

export default App
