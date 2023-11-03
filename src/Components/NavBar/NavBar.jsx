import React from "react";
import logoComplete from "../../assets/completeLogo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  let counter = 0;

  document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      if (counter === 0) {
        header.classList.remove("navBar");
        counter++;
      } else {
        header.classList.remove("navBar1");
      }

      header.classList.add("stickyNavBar");
    } else {
      if (counter === 0) {
        header.classList.add("navBar");
        counter++;
      } else {
        header.classList.add("navBar1");
      }
      header.classList.remove("stickyNavBar");
    }
  });
  return (
    <header className={"navBar"}>
      <Link className="linkNavBar" smooth={true} to="first" duration={1500}>
        <img src={logoComplete} alt="complete logo" />
      </Link>
    </header>
  );
};

export default NavBar;
