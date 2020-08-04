import React, { useState, useEffect } from "react";
import ScheduleItem from "./ScheduleItem";
import placeLogo from "../assets/images/meditacna.svg";

const Place = (props) => {
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    setHorarios(props.schedules);
    document.title = `ahora hay ${horarios.length} horarios`;
  });

  return (
    <section className="place">
      <div className="place__content">
        <img className="place__logo" src={placeLogo} />
        <div className="place__info">
          <p>
            <i className="icon icon-location"></i> {props.address}
          </p>
          <p>Tacna, Peru</p>
        </div>
        <div className="place__schedule">
          <div className="schedule">
            <p>Calendario de citas diario</p>
            <div className="legend">
              <div className="legend__item">
                <span className="available">-- Disponible</span>
              </div>
              <div className="legend__item">
                <span className="unavailable">-- Ocupado</span>
              </div>
            </div>
            <hr />
            {props.schedules.map((schedule) => (
              <ScheduleItem
                id={schedule._id}
                hour={schedule.hour}
                status={schedule.status}
              />
            ))}
          </div>
        </div>
        <div className="actions">
          <div className="container">
            <p>¿Ya tienes una cita agendada?</p>
            <a className="btn green" href="/myappointments">
              Ver mis citas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Place;
