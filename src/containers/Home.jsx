import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Place from "../components/Place";
import Services from "../components/Services";
import Service from "../components/Service";
import Call from "../components/Call";
import { db } from "../services/firebase";
import firebase from "firebase";

const Home = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
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

  useEffect(() => {
    db.collection("days")
      .get()
      .then((querySnapshot) => {
        const days = [];
        const x = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();

          currentDoc.id = doc.id;
          days.push(currentDoc);
          days.map((item) => {
            item.schedules.map((schedule) => {
              x.push(
                new firebase.firestore.Timestamp(
                  schedule.seconds,
                  schedule.nanoseconds
                )
              );
            });
          });
        });

        console.log(days, "dias");
        console.log(
          new firebase.firestore.Timestamp(
            days[0].day.seconds,
            days[0].day.nanoseconds
          )
            .toDate()
            .toLocaleDateString(),
          "dias"
        );

        console.log(x, "equis");
      });
  });

  return (
    <div>
      <Place address="Calle Tacna 159" appointments={appointments} />
      {/* <Banner />
      <Services>
        <Service name="Ginecologia" />
        <Service name="Psicologia" />
        <Service name="Pediatria" />
      </Services> */}
      <Call />
    </div>
  );
};

export default Home;
