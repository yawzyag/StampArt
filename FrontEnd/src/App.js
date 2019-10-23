import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Footer from "./components/footer.component"
import Products from "./components/products.component"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
