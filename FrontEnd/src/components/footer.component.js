import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid bg-light">
          <div class="row">
            <div class="col-sm-6 mt-3">
              <p>
                More info: <span>Bogotá</span>
                <br />
                Phone: <span>+573177365925</span>
              </p>
            </div>
            <div class="col-sm-6 mt-4">
              <div class="page-footer float-right">
                <ul>
                    <i class="fab fa-facebook m-2"></i>
                    <i class="fab fa-twitter m-2"></i>
                    <i class="fab fa-instagram m-2"></i>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
