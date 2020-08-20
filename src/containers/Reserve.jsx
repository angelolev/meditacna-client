import React, { Fragment, useState, useEffect } from "react";
import Message from "../components/Message";
import { db } from "../services/firebase";
import FormReserveAppointment from "../components/FormReserveAppointment";
import MyAppointments from "../components/MyAppointments";

const Reserve = (props) => {
  const [appointment, setAppointment] = useState([]);
  const appointmentId = props.match.params.id;

  useEffect(() => {
    db.collection("appointments")
      .doc(appointmentId)
      .get()
      .then((querySnapshot) => {
        setAppointment(querySnapshot.data());
      });
  }, []);

  // const addAppointmentHandler = (appointment) => {
  //   fetch("https://meditacna-8ddf0.firebaseio.com/appointments.json", {
  //     method: "POST",
  //     body: JSON.stringify(appointment),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((responseData) => {
  //       setMyAppointments((prevAppointments) => [
  //         ...prevAppointments,
  //         { id: responseData.name, ...appointment },
  //       ]);
  //     });
  // };

  return (
    <Fragment>
      <Message message="Completa los datos para agendar tu cita" />
      <FormReserveAppointment appointment={appointment} id={appointmentId} />
    </Fragment>
  );
};

export default Reserve;
