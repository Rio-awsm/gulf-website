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
function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <>
      <Navbar />
      <>
        <BrowserRouter>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutPage />}/>
            </Routes>
          </Wrapper>
        </BrowserRouter>
      </>

      <Footer />
    </>
  );
}

export default App;
