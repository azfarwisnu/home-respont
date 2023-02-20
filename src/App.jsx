import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/styles.css";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
