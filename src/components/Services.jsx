import React from "react";

const Services = ({ children }) => (
  <section className="services">
    <h2>Servicios</h2>
    <div className="services__list">{children}</div>
  </section>
);

export default Services;
