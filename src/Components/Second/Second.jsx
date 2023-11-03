import React from "react";
import style from "./Second.module.css";
import ahorro from "../../assets/ahorro.png";
import medico from "../../assets/medicos.png";
import vida from "../../assets/vida.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { AnimationOnScroll } from "react-animation-on-scroll";
import chevronDown from "../../assets/chevronDown.png";

const Second = () => {
  return (
    <>
      <div className={style.secondContainer}>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          className={style.secondTextContainer}
        >
          <h1 id="servicios">Mis servicios</h1>
          <p className={style.secondTextP}>
            Nam accumsan mauris pellentesque, venenatis purus et, consequat
            enim. Pellentesque sollicitudin arcu ac ex eleifend egestas sed eu
            ante.
          </p>
        </AnimationOnScroll>
        <div className={style.serviciosContainer}>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            className={style.serviceCard}
          >
            <div className={style.elipseContainer}>
              <img src={ahorro} alt="ahorro" />
            </div>
            <h2>Ahorro para el retiro</h2>
            <p>Cras maximus diam tellus, vitae consectetur</p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            className={style.serviceCard}
          >
            <div className={style.elipseContainer}>
              <img src={medico} alt="medico" />
            </div>
            <h2>Gastos medicos</h2>
            <p>Cras maximus diam tellus, vitae consectetur</p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            className={style.serviceCard}
          >
            <div className={style.elipseContainer}>
              <img src={vida} alt="vida" />
            </div>
            <h2>Seguro de vida</h2>
            <p>Cras maximus diam tellus, vitae consectetur</p>
          </AnimationOnScroll>
        </div>
      </div>
      <div className={style.bannerArrow}>
        <div className={style.elipseBanner2}>
          <Link
            smooth={true}
            to="contact"
            offset={-90}
            duration={1500}
            className={style.elipseBanner1}
          >
            <img src={chevronDown} alt="chevronDown" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Second;
