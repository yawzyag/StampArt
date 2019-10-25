import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light shadow-sm p-3 mb-5 bg-white rounded"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Link to="/">
          <div className="navbar-brand" style={letters}>
            <h3>StampArt</h3>
          </div>
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" style={{ color: "#f44336" }}>
              <div className="nav-link" style={letters}>
                Home <span className="sr-only">(current)</span>
              </div>
            </Link>
          </li>
        </ul>

        <div className="float-right">
          <Link to="/login">
            <button className="btn btn-dark" type="submit">
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
