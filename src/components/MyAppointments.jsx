import React from "react";

const MyAppointments = (props) => {
  return (
    <div>
      <h1>Mis citas</h1>
      {props.appointments.map((appointment) => (
        <li key={appointment.id}>{appointment.hour}</li>
      ))}
    </div>
  );
};

export default MyAppointments;
