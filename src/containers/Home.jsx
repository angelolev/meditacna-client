import React from "react";
import Banner from "../components/Banner";
import Place from "../components/Place";
import Services from "../components/Services";
import Service from "../components/Service";
import Call from "../components/Call";

import "../assets/styles/app.scss";

const Home = () => {
  return (
    <div>
      <Place address="Calle Tacna 159" />
      <Banner />
      <Services>
        <Service name="Ginecologia" />
        <Service />
        <Service />
      </Services>
      <Call />
    </div>
  );
};

export default Home;
