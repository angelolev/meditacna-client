import React from "react";

const ScheduleItem = (props) => {
  // useEffect(() => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ status: "unavailable" }),
  //   };
  //   fetch("http://localhost:3000/api/schedules", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => setPostId(data.id));
  // });
  function holi() {
    console.log("xd");
  }

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
      <button onClick={() => handleDate(props.id)} className="schedule__link">
        {props.hour}
      </button>
    </div>
  );
};

export default ScheduleItem;
