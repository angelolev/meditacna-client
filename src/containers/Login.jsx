import React, { useState } from "react";

const Login = () => {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className="login">
      <div className="login__container">
        <h2>Inicia Sesion</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <input name="email" type="text" onChange={handleInput} />
          <input name="password" type="password" onChange={handleInput} />
          <button>Iniciar sesion</button>
        </form>
      </div>
    </section>
  );
};
export default Login;
