import React, { Fragment } from "react";
import Message from "../components/Message";
import FormReserveAppointment from "../components/FormReserveAppointment";

const Reserve = () => (
  <Fragment>
    <Message message="Completa los datos para agendar tu cita" />
    <FormReserveAppointment />
  </Fragment>
);

export default Reserve;
