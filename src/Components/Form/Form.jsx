import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./Form.module.css";
import Error from "../Error/Error";
import { toast } from "react-toastify";

const serviceId = "service_0a2rb9j";
const templateId = "template_ro0yexm";
const publicId = "xOMplY3fFsgfnpCa5";

const Form = () => {
  const form = useRef();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputs.name === "" ||
      inputs.email === "" ||
      inputs.phone === "" ||
      inputs.product === ""
    ) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
      console.log(inputs);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicId).then(
      (result) => {
        toast.success("Message sent", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
        });
        setInputs({
          name: "",
          email: "",
          phone: "",
          product: "",
        });
        console.log(result.text);
      },
      (error) => {
        toast.error("Message not send, try again");
        console.log(error.text);
      }
    );

    setInputs({
      name: "",
      email: "",
      phone: "",
      product: "",
    });
  };

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form ref={form} className={style.formContainer} onSubmit={handleSubmit}>
      {error && <Error children={"Hay al menos un campo vacio"} />}
      <input
        placeholder="Juan Perez"
        type="text"
        value={inputs.name}
        onChange={handleOnChange}
        name="name"
      />
      <input
        placeholder="correo@correo.com"
        type="email"
        value={inputs.email}
        onChange={handleOnChange}
        name="email"
      />
      <input
        placeholder="888-888-8888"
        type="phone"
        value={inputs.phone}
        onChange={handleOnChange}
        name="phone"
      />
      <select name="product" value={inputs.product} onChange={handleOnChange}>
        <option>-Selecciona un producto-</option>
        <option>Seguro de vida</option>
        <option>Gastos medicos</option>
        <option>Seguro de Ahorro</option>
      </select>

      <button className={style.formBtn} action="submit">
        enviar
      </button>
    </form>
  );
};

export default Form;
