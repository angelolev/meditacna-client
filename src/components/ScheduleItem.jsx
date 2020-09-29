import React from "react";
import { Link } from "react-router-dom";

const ScheduleItem = (props) => {
  return (
    <div className={`schedule__item ${props.status}`}>
      <Link to={`/reserve/${props.hour}`}>{props.hour}</Link>
    </div>
  );
};

export default ScheduleItem;
