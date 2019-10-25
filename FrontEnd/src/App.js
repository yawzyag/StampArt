import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navbar.component";
import LogReg from "./log-reg";
import Home from "./components/home.component";
import Footer from "./components/footer.component";
import Item from "./components/item.component";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ height:"100vh" }}>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/:id" component={Item} />
            <div className="loginBox">
              <Route path="/login" component={LogReg} />
            </div>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
