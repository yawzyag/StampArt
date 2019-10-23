import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-light"
        style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #ccc" }}
      >
        <a class="navbar-brand" href="#" style={letters}>
          <h3>StampArt</h3>
        </a>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" style={letters}>
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>

        <div class="float-right">
          <button class="btn btn-dark" type="submit">
            Sign in
          </button>
        </div>
      </nav>
    );
  }
}

const letters = {
  color: "#f44336"
};

export default Navbar;
