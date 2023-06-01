import { useSelector } from 'react-redux'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import Login from './pages/Login'
import Protected from './components/route-hocs/Protected'
import OnlyWhenLoggedOut from './components/route-hocs/OnlyWhenLoggedOut'

function App() {
  const header = useSelector((state) => state.header)
  const footer = useSelector((state) => state.footer)

  return (
    <div className="h-screen">
      {!header.hidden && <Header />}
      <Routes>
        <Route exact path="/" element={<Protected component={Home} />} />
        <Route path="login" element={<OnlyWhenLoggedOut component={Login} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!footer.hidden && <Footer />}
    </div>
  )
}

export default App
