import React from "react";
import logoFooter from "../../assets/logoFaviola1.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <section className={style.imgFooter}>
        <img src={logoFooter} alt="logoFooter" />
      </section>
      <section className={style.footerLinks}>
        <h1>redes sociales</h1>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">faviola.aguirre@hotmail.com</a>
          </li>
          <li>
            <a href="#">+52-844-131-4309</a>
          </li>
        </ul>
      </section>
      <section className={style.footerForm}>
        <form action="submit">
          <label>Suscribete a mi newsletter</label>
          <input type="email" />
        </form>
      </section>
    </footer>
  );
};

export default Footer;
