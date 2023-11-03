import React from "react";
import Form from "../Form/Form";
import style from "./Third.module.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import messageIcon from "../../assets/messageIcon.png";
import phoneIcon from "../../assets/phoneIcon.png";

const Third = () => {
  return (
    <div id="contact" className={style.thirdContainer}>
      <div className={style.thirdTextContainer}>
        <div className={style.contactContainer}>
          <h1>¿Quieres cotizar alguno de nuestros productos?</h1>
          <div className={style.contactInfoContainer}>
            <img src={messageIcon} alt="messageIcon" />
            <p>faviola.aguirre@hotmail.com</p>
          </div>
          <div className={style.contactInfoContainer}>
            <img src={phoneIcon} alt="phoneIcon" />
            <p>+52 844-131-4309</p>
          </div>
        </div>
        <div className={style.contactImg}>
          <a href="#" className={style.btnSocial}>
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#" className={style.btnSocial}>
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
      <div className={style.thirdFormContainer}>
        <h1>Compartenos tus datos</h1>
        <Form />
      </div>
    </div>
  );
};

export default Third;
