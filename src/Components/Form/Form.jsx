import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
import style from "./Form.module.css";
// import Error from "../Error/Error";
// import { toast } from "react-toastify";

// const serviceId = "service_zltoji3";
// const templateId = "template_rz22o0i";
// const publicId = "vnY-Rz1FRwjHQ8Rek";

const Form = () => {
  const form = useRef();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    mensaje: "",
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputs.name === "" ||
      inputs.email === "" ||
      inputs.phone === "" ||
      inputs.mensaje === ""
    ) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);

      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicId).then(
      (result) => {
        toast.success("Message sent");
        setFormulario({
          user_name: "",
          user_email: "",
          message: "",
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
      mensaje: "",
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
      {error && <Error children={"Hay almenos un campo vacio"} />}
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
      <select name="producto">
        <option>-Selecciona un producto-</option>
        <option value={inputs.product}>Seguro de vida</option>
        <option value={inputs.product}>Gastos medicos</option>
        <option value={inputs.product}>Seguro de Ahorro</option>
      </select>

      <button className={style.formBtn} action="submit">
        enviar
      </button>
    </form>
  );
};

export default Form;
