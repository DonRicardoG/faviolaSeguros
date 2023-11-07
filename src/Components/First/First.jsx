import React from "react";
import style from "./First.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import profilePicture from "../../assets/mainPicture.png";
import chevronDown from "../../assets/chevronDown.png";

const First = (props) => {
  const { loader } = props;

  return (
    <div id="first" className={style.firstContainer}>
      <div className={style.firstMainContainer}>
        <div
          className={
            loader === false
              ? style.firstTextContainer
              : style.firstTextContainerOn
          }
        >
          <h1>Protegete con los expertos</h1>
          <p>
            Tener un seguro es prevenir el futuro economico de la familia y el
            nuestro.
          </p>
        </div>
        <div
          className={
            loader === false
              ? style.firstImgContainer
              : style.firstImgContainerOn
          }
        >
          <img src={profilePicture} alt="Main Picture" />
        </div>
      </div>
      <div className={style.bannerArrow}>
        <div className={style.elipseBanner2}>
          <Link
            smooth={true}
            to="servicios"
            duration={1500}
            offset={-80}
            className={style.elipseBanner1}
          >
            <img src={chevronDown} alt="chevronDown" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
