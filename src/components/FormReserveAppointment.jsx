import React, { useState } from "react";
import { db } from "../services/firebase";
import { useEffect } from "react";

const FormReserveAppointment = (props) => {
  const [pacient, setPacient] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  useEffect(() => {
    setPacient(props.appointment.pacient);
    setDni(props.appointment.dni);
    setPhone(props.appointment.phone);
    setHour(props.appointment.hour);
  });

  const updateAppointment = (id, updatedAppointment) => {
    db.collection("appointments")
      .doc(id)
      .update(updatedAppointment)
      .then((querySnapshot) => {
        console.log(querySnapshot);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
    updateAppointment(props.id, {
      pacient,
      dni,
      phone,
      hour,
      status: "unavailable",
    });
  };

  return (
    <section className="cita">
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="pacient">Nombre Completo</label>
            <input
              className="form-input"
              type="text"
              name="pacient"
              required
              value={pacient}
              onChange={(event) => setPacient(event.target.value)}
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
          {/* <div className="form-group">
            <label htmlFor="date">Fecha</label>
            <input
              className="form-input form-date"
              type="date"
              name="date"
              required
              value=""
              onChange={(event) => setDate(event.target.value)}
            />
          </div> */}
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
