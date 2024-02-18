import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AllProducts from "./Components/AllProducts";
import Contact from "./Components/Contact";
import Refund from "./Components/Refund";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";
import Shipping from "./Components/Shippin";
import ContInfo from "./Components/ContInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/shipping-policy" element={<Shipping />} />
          <Route path="/contact-information" element={<ContInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
