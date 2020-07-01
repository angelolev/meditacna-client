import React from "react";

const Message = ({ message }) => (
  <section className="message">
    <div className="container">
      <p>{message}</p>
    </div>
  </section>
);

export default Message;
