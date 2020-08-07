import React, { useState } from "react";
import { useParams } from "react-router";

const FormReserveAppointment = (props) => {
  let { id } = useParams();

  const [fullname, setFullname] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddAppointment({
      fullname: fullname,
      dni: dni,
      phone: phone,
      date: date,
      hour: hour,
    });
  };

  return (
    <section className="cita">
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="fullname">Nombre Completo</label>
            <input
              className="form-input"
              type="text"
              name="fullname"
              required
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dni">DNI</label>
            <input
              className="form-input"
              type="text"
              name="dni"
              required
              value={dni}
              onChange={(event) => setDni(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefono</label>
            <input
              className="form-input"
              type="tel"
              name="phone"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Tipo</label>
            <select>
              <option value="particular">Particular</option>
              <option value="convenio"></option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Fecha</label>
            <input
              className="form-input form-date"
              type="date"
              name="date"
              required
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hour">Hora</label>
            <input
              className="form-input"
              type="tel"
              name="hour"
              required
              value={hour}
              onChange={(event) => setHour(event.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn green" type="submit">
              Reservar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormReserveAppointment;
