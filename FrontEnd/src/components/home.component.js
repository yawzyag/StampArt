import React, { Component } from "react";
import { Products } from "./products.component";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <div class="mt-3">
          <h1 class="text-center">Create or Buy a Hoodie</h1>
          <div class="row">
            <div className="col-6">
              <div class="dropdown mt-3 ml-5">
                <button
                  class="btn btn-outline-danger dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Artists
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Yesid
                  </a>
                  <a class="dropdown-item" href="#">
                    Paula
                  </a>
                  <a class="dropdown-item" href="#">
                    Jeniffer
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <button
                type="button"
                class="btn btn-danger btn-md mt-3 mr-5 float-right"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div class="container">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://raw.githubusercontent.com/AndZapata/resources/master/pickle_rick.png"
                  class="d-block img-fluid rounded mx-auto"
                  style={{ width: "25%" }}
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://raw.githubusercontent.com/AndZapata/resources/master/red_headphones.png"
                  class="d-block img-fluid rounded mx-auto"
                  style={{ width: "25%" }}
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://raw.githubusercontent.com/AndZapata/resources/master/one_punch_man.png"
                  class="d-block img-fluid rounded mx-auto"
                  style={{ width: "25%" }}
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-4 mb-1">
            <div class="card" style={{ width: "18rem;" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-1">
            <div class="card" style={{ width: "18rem;" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-1">
            <div class="card" style={{ width: "18rem;" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Products />
        
      </div>
    );
  }
}

export default Home;
