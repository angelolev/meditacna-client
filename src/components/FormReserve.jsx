import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  let { id } = useParams();

  //console.log(watch("example"));
  // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="pacient">Nombre completo</label>
        <input
          type="text"
          className="form-input"
          name="pacient"
          ref={register({ required: true })}
        />
        {errors.pacient && <span>Ingresa tu nombre</span>}
      </div>
      <div className="form-group">
        <label htmlFor="dni">DNI</label>
        <input
          type="tel"
          className="form-input"
          name="dni"
          ref={register({ required: true })}
        />
        {errors.dni && <span>Ingresa tu DNI</span>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Celular</label>
        <input
          type="tel"
          className="form-input"
          name="phone"
          ref={register({ required: true })}
        />
        {errors.phone && <span>Ingresa tu celular</span>}
      </div>
      <div className="form-group">
        <label htmlFor="hour">Hora</label>
        <input
          type="tel"
          className="form-input"
          name="hour"
          value={id}
          ref={register()}
          readOnly
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Reservar" />
      </div>
    </form>
  );
}
