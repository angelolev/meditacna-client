import React, { Fragment } from "react";
import Message from "../components/Message";
import CitasList from "../components/CitasList";
import FormMyAppointments from "../components/FormMyAppointments";
import CitaDetail from "../components/CitaDetail";

const MyAppointments = () => (
  <Fragment>
    <Message message="Completa tus datos para ver tus citas" />
    <FormMyAppointments />
    <CitasList>
      <CitaDetail />
      <CitaDetail />
      <CitaDetail />
      <CitaDetail />
    </CitasList>
  </Fragment>
);

export default MyAppointments;
