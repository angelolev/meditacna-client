import React, { Fragment, useState, useEffect } from "react";
import Message from "../components/Message";
import FormReserveAppointment from "../components/FormReserveAppointment";
import MyAppointments from "../components/MyAppointments";

const Reserve = () => {
  const [myAppointments, setMyAppointments] = useState([]);

  useEffect(() => {
    fetch("https://meditacna-8ddf0.firebaseio.com/appointments.json").then(
      (response) =>
        response.json().then((responseData) => {
          const loadedAppointments = [];
          for (const key in responseData) {
            loadedAppointments.push({
              id: key,
              fullname: responseData[key].fullname,
              dni: responseData[key].dni,
              phone: responseData[key].phone,
              date: responseData[key].date,
              hour: responseData[key].hour,
            });
          }
          setMyAppointments(loadedAppointments);
        })
    );
  }, []);

  const addAppointmentHandler = (appointment) => {
    fetch("https://meditacna-8ddf0.firebaseio.com/appointments.json", {
      method: "POST",
      body: JSON.stringify(appointment),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setMyAppointments((prevAppointments) => [
          ...prevAppointments,
          { id: responseData.name, ...appointment },
        ]);
      });
  };

  return (
    <Fragment>
      <Message message="Completa los datos para agendar tu cita" />
      <FormReserveAppointment onAddAppointment={addAppointmentHandler} />
      <MyAppointments appointments={myAppointments} />
    </Fragment>
  );
};

export default Reserve;
