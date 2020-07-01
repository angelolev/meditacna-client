import React from "react";

const Service = (props) => (
  <div className="service">
    <div className="service__content">
      <div className="service__icon">
        <i className="icon icon-doctor"></i>
      </div>
      <div className="service__name">
        <p>{props.name}</p>
      </div>
    </div>
  </div>
);

export default Service;
