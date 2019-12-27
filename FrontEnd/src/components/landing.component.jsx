import React, { Component } from "react";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover = async () => {
    await this.setState({ hover: !this.state.hover });
  };
  render() {
    return (
      <div>
        <header
          className="py-5 bg-image-full myLanding"
        >
          <div className="h-200">
            <div
              className="mt-2 cajita"
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
            >
              <div className="dropdown">

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a
                    className="dropdown-item"
                    href="#features"
                    style={{ display: "inline" }}
                  >
                    Features
                  </a>
                  <a
                    className="dropdown-item"
                    href="#about-us"
                    style={{ display: "inline" }}
                  >
                    About us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          className="py-5 bg-image-full myLanding"
        >
          <div
            className="background"
            style={{ backgroundColor: "#ffffff", opacity: "0.6" }}
          >
            <div className="text-box text-center">
              <h1 className="title" style={{ color: "#f44336" }}>
                StampArt
              </h1>
              <p className="">
                A place to bring to life your own ideas and put it in a hoodie
                without moving of your.
              </p>
            </div>
          </div>
          <div style={{ height: "100px" }}></div>
        </section>

        <section id="features" className="py-6">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-6 mt-4">
                <img
                  src="https://i.imgur.com/wa5MjtB.png"
                  alt="create"
                  className="create-hoodie shadow rounded img-fluid"
                />
              </div>
              <div className="col-4 mt-4">
                <h3 className="create">Create your own design!</h3>
                <p>
                  Imagine the image that you want to see in a Hoodie, create it
                  as you want to, upload the image with some description. And
                  that's it! The App will show your image by default.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6 mt-4">
                <img
                  src="https://i.imgur.com/PvkfLUi.png"
                  alt="create"
                  className="create-hoodie shadow rounded img-fluid"
                />
              </div>
              <div className="col-4 mt-4">
                <h3 className="buy">Buy what you like!</h3>
                <p>
                  You can view our products and select the one you like best,
                  add it to the cart and then pay for the product, we take care
                  of the delivery process and you receive it at home
                </p>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-6 mt-4 mb-4">
                <img
                  src="https://i.imgur.com/kjXnSPB.png"
                  alt="create"
                  className="create-hoodie shadow rounded img-fluid"
                />
              </div>
              <div className="col-4 mt-4">
                <h3 className="artist">Become an Artist!</h3>
                <p>
                Your products will appear as part of the page and if one of your designs has been purchased by any of the users, you will obtain 10%! of the products sold.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-5 bg-image-full myLanding"
        >
          <div style={{ height: "200px" }}></div>
        </section>

        <section id="about-us" className="py-5">
          <div className="container">
            <h1>About Us</h1>
            <p className="lead">
              The idea of StampArt bring to life when we were studying at
              Holberton School and one of our peers proposed the idea of making
              some hoodies for our cohort 8 all because we were going to finish
              and wanted something to identify us. So we started looking for
              clothing satellites to sew the hoodies and places to embroider the
              logo and a phrase. In the middle of this search, we think -We
              should do a place where people can personalize his hoodies- and
              that's how StampArt born, a place to bring to life your own ideas
              and put it in a hoodie without moving of your home.
            </p>
            <br />
            <div className="row">
              <div className="col text-center">
                <p>
                  <strong>Yesid Gonzalez</strong>
                </p>
                <hr
                  style={{
                    border: "0",
                    height: "1px",
                    backgroundImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
                  }}
                />
                <img
                  src="https://media.licdn.com/dms/image/C4E03AQHCEimmMUyC8A/profile-displayphoto-shrink_800_800/0?e=1577923200&v=beta&t=1lP6kFQ5tjVDPQDw54z8Ewp3AW_PnU4YPn-_H3ZWZ9c"
                  alt="yesid"
                  className="team rounded-circle"
                  style={{ width: "10rem", height: "10rem" }}
                />
                <br />
                <div className="card border-0" style={{ display: "inline" }}>
                  <a
                    href="https://github.com/yawzyag"
                    style={{ color: "black" }}
                  >
                    <i className="fab fa-github fa-2x p-2"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yesid-augusto-holby/"
                    style={{ color: "black" }}
                  >
                    <i className="fab fa-linkedin-in fa-2x p-2"></i>
                  </a>
                  <a
                    href="https://twitter.com/yesid_dev"
                    style={{ color: "black" }}
                  >
                    <i className="fab fa-twitter fa-2x p-2"></i>
                  </a>
                </div>
              </div>
              <div className="col text-center">
                <p>
                  <strong>Paula Gutierrez</strong>
                </p>
                <hr
                  style={{
                    border: "0",
                    height: "1px",
                    backgroundImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
                  }}
                />
                <img
                  src="https://media.licdn.com/dms/image/C4E03AQF1sMo13hh-Jw/profile-displayphoto-shrink_800_800/0?e=1577923200&v=beta&t=a2sdHqV_pkd--OJ7n7yIJHwCweOeUr5YrK9w76XKcgM"
                  alt="pau"
                  className="team rounded-circle"
                  style={{ width: "10rem", height: "10rem" }}
                />
                <br />
                <div className="card border-0" style={{ display: "inline" }}>
                  <a
                    href="https://github.com/andzapata"
                    style={{ color: "black" }}
                  >
                    <i className="fab fa-github fa-2x p-2"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/paula-andrea-gutierrez-zapata-b77b00167/"
                    style={{ color: "black" }}
                  >
                    <i className="fab fa-linkedin-in fa-2x p-2"></i>
                  </a>
                  <a
                    href="https://twitter.com/andzapata1"
                    style={{ color: "black" }}
                  >
                    <i className="fab fa-twitter fa-2x p-2"></i>
                  </a>
                </div>
              </div>
              <div className="col text-center">
                <p>
                  <strong>Jeniffer Vanegas</strong>
                </p>
                <hr
                  style={{
                    border: "0",
                    height: "1px",
                    backgroundImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
                  }}
                />
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQHp0shw555QDw/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=Rs1oX9FOEwXLor2tUD6pKzovzRllGNxmsRFDpjHnpSM"
                  alt="jeniffer"
                  className="team rounded-circle"
                  style={{ width: "10rem", height: "10rem" }}
                />
                <br />
                <div className="card border-0" style={{ display: "inline" }}>
                  <a
                    href="https://github.com/jeniffervp"
                    style={{ color: "black" }}
                  >
                    <i className="fab fa-github fa-2x p-2"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jeniffer-vanegas-pinedo-b76649b9/"
                    style={{ color: "black" }}
                  >
                    <i className="fab fa-linkedin-in fa-2x p-2"></i>
                  </a>
                  <a
                    href="https://twitter.com/jeniffervaneg"
                    style={{ color: "black" }}
                  >
                    <i className="fab fa-twitter fa-2x p-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
