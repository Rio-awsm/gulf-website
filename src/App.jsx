import { useEffect, useLayoutEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Home/Homepage";
import AboutPage from "./pages/AboutUs/AboutPage";
import ContactUs from "./pages/ContactUs/ContactUs";
import ServicePage from "./pages/Services/ServicePage";
function App() {
  const [screenLoading, setScreenLoading] = useState(false);
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<ServicePage />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
