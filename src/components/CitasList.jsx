import React from "react";

const CitasList = ({ children }) => (
  <section className="citas__list">
    <h3>Tus Citas</h3>
    <div className="container">{children}</div>
  </section>
);

export default CitasList;
