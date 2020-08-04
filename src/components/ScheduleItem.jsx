import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ScheduleItem = (props) => {
  function handleDate(id) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "unavailable" }),
    };
    fetch("http://localhost:3000/api/schedules/" + id, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className={`schedule__item ${props.status}`}>
      {/* <button onClick={() => handleDate(props.id)} className="schedule__link">
        {props.hour}
      </button> */}
      {/* <a href={`/reserve/${props.id}`} className="schedule__link">
        {props.hour}
      </a> */}
      <Link to={`/reserve/${props.id}`}>{props.hour}</Link>
    </div>
  );
};

export default ScheduleItem;
