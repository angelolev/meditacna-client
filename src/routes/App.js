import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";
import MyAppointments from "../containers/MyAppointments";
import Reserve from "../containers/Reserve";
import Layout from "../components/Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reserve" component={Reserve} />
        <Route exact path="/myappointments" component={MyAppointments} />
        <Route exact path="/reserve/:id" component={Reserve} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
