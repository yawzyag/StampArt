import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-light"
        style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #ccc" }}
      >
        <Link to="/">
          <a class="navbar-brand" style={letters}>
            <h3>StampArt</h3>
          </a>
        </Link>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/">
              <a class="nav-link" style={letters}>
                Home <span class="sr-only">(current)</span>
              </a>
            </Link>
          </li>
        </ul>

        <div class="float-right">
          <Link to="/login">
            <button class="btn btn-dark" type="submit">
              Log in
          </button>
          </Link>
        </div>
      </nav>
    );
  }
}

const letters = {
  color: "#f44336"
};

export default Navbar;
