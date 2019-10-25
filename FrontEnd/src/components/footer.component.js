import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto">
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-sm-6 mt-3">
              <p>
                More info: <span>Bogotá</span>
                <br />
                Phone: <span>+573177365925</span>
              </p>
            </div>
            <div className="col-sm-6 mt-4">
              <div className="page-footer float-right">
                <ul>
                    <i className="fab fa-facebook m-2"></i>
                    <i className="fab fa-twitter m-2"></i>
                    <i className="fab fa-instagram m-2"></i>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
