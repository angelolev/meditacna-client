import React from "react";

const FormReserveAppointment = () => (
  <section className="cita">
    <div className="container">
      <form action="">
        <div className="form-group">
          <label for="fullname">Nombre Completo</label>
          <input className="form-input" type="text" name="fullname" required />
        </div>
        <div className="form-group">
          <label for="dni">DNI</label>
          <input className="form-input" type="text" name="dni" required />
        </div>
        <div className="form-group">
          <label for="phone">Telefono</label>
          <input className="form-input" type="tel" name="phone" required />
        </div>
        <div className="form-group">
          <label for="date">Fecha</label>
          <input
            className="form-input form-date"
            type="date"
            name="date"
            required
          />
        </div>
        <div className="form-group">
          <label for="hour">Hora</label>
          <input className="form-input" type="tel" name="hour" required />
        </div>
        <div className="form-group">
          <a href="/" className="btn green" id="btnReservar">
            Reservar
          </a>
        </div>
      </form>
    </div>
  </section>
);

export default FormReserveAppointment;
