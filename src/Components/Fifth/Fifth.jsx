import React from "react";
import logoShield from "../../assets/logoShield.png";
import style from "./Fifth.module.css";

const Fifth = () => {
  return (
    <div className={style.fifthContainer}>
      <h1>Sentirse seguro es saber que cuentas con tu agente de seguros</h1>
      <img src={logoShield} alt="logo shield" />
    </div>
  );
};

export default Fifth;
