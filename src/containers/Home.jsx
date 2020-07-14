import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Place from "../components/Place";
import Services from "../components/Services";
import Service from "../components/Service";
import Call from "../components/Call";

import "../assets/styles/app.scss";

const Home = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/schedules");
      res.json().then((res) => setSchedules(res.data));
    }

    fetchData();
  }, []);

  return (
    <div>
      <Place address="Calle Tacna 159" schedules={schedules} />
      <Banner />
      <Services>
        <Service name="Ginecologia" />
        <Service name="Psicologia" />
        <Service name="Pediatria" />
      </Services>
      <Call />
    </div>
  );
};

export default Home;
