import React from "react";

const FormMyAppointments = () => (
  <section className="cita">
    <div className="container">
      <form action="">
        <div className="form-group">
          <label htmlFor="dni">DNI</label>
          <input type="tel" className="form-input" name="dni" required />
        </div>
        <div className="form-group">
          <a href="/ver/detalle" className="btn green">
            Buscar citas
          </a>
        </div>
      </form>
    </div>
  </section>
);

export default FormMyAppointments;
