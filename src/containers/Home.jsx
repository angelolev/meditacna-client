import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Place from "../components/Place";
import Services from "../components/Services";
import Service from "../components/Service";
import Call from "../components/Call";
import { db } from "../services/firebase";

const Home = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   const res = await fetch("http://localhost:3000/api/schedules");
    //   res.json().then((res) => setSchedules(res.data));
    // }

    // fetchData();
    db.collection("appointments")
      .get()
      .then((querySnapshot) => {
        const loadedAppointments = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedAppointments.push(currentDoc);
        });
        setAppointments(loadedAppointments);
      });
  }, []);

  return (
    <div>
      <Place address="Calle Tacna 159" appointments={appointments} />
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
