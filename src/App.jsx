import "./App.css";
import React, { useState, useEffect } from "react";
import First from "./Components/First/First";
import Second from "./Components/Second/Second";
import Third from "./Components/Third/Third";
import Fifth from "./Components/Fifth/Fifth";
import NavBar from "./Components/NavBar/NavBar";
import "animate.css/animate.min.css";
import Footer from "./Components/Footer/Footer";
import Map from "./Components/Map/Map";
import logoImg from "./assets/logoImg.png";
import logoTxt from "./assets/logoTxt.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loader, setLoader] = useState(false);

  setTimeout(() => {
    setLoader(true);
    document.querySelector("#body").classList.remove("hiddenOverFlow");
  }, 2000);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <ToastContainer />
      <div
        className={loader === false ? "loaderContainer" : "loaderContainerOff"}
      >
        <span className="loader">
          <img src={logoImg} alt="logoImg" />
        </span>
        <span className="loaderSpan">
          <img src={logoTxt} alt="logoTxt" />
        </span>
      </div>
      <NavBar />
      <First loader={loader} />
      <Second />
      <Third />
      <Fifth />
      <Map />
      <Footer />
    </>
  );
}

export default App;
