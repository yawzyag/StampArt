import React, { Component } from "react";
import Products from "./products.component";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="mt-3">
          <h1 className="text-center mb-4" style={{ fontFamily: "'Convergence', sans-serif" }}>Create or Buy a Hoodie</h1>
          <div className="row">
            <div className="col-6">
              <div className="dropdown mt-3 ml-5">
                <button
                  className="btn btn-outline-danger dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Artists
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div className="dropdown-item" href="#">
                    Yesid
                  </div>
                  <div className="dropdown-item" href="#">
                    Paula
                  </div>
                  <div className="dropdown-item" href="#">
                    Jeniffer
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-danger btn-md mt-3 mr-5 float-right"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
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
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://raw.githubusercontent.com/AndZapata/resources/master/pickle_rick.png"
                  className="d-block img-fluid rounded mx-auto"
                  style={{ width: "25%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://raw.githubusercontent.com/AndZapata/resources/master/red_headphones.png"
                  className="d-block img-fluid rounded mx-auto"
                  style={{ width: "25%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://raw.githubusercontent.com/AndZapata/resources/master/one_punch_man.png"
                  className="d-block img-fluid rounded mx-auto"
                  style={{ width: "25%" }}
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 mb-1">
            <div className="card shadow p-3 mb-5 bg-white rounded border-light">
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign:"center" }}><strong>Create your own design</strong></h5>
                <p className="card-text">
                  Imagine the image that you want to see in a Hoodie, create it as you want to, upload the image with some description. And that's it! The App will show your image by default
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-1">
            <div className="card shadow p-3 mb-5 bg-white rounded border-light">
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign:"center" }}><strong>Buy what you like</strong></h5>
                <p className="card-text">
                You can view our products and select the one you like best, add it to the cart and then pay for the product, we take care of the delivery process and you receive it at home
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-1">
            <div className="card shadow p-3 mb-5 bg-white rounded border-light">
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign:"center" }}><strong>Become an Artist!</strong></h5>
                <p className="card-text">
                Your products will appear as part of the page and if one of your designs has been purchased by any of the users, you will obtain 10%! of the products sold. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <Products onClickCart={this.props.onClickCart} />
        
      </div>
    );
  }
}

export default Home;
