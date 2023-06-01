import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

function App() {
  const header = useSelector((state) => state.header);
  const footer = useSelector((state) => state.footer);

  return (
    <div className="h-screen">
      {!header.hidden && <Header />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!footer.hidden && <Footer />}
    </div>
  );
}

export default App;
