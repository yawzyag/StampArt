import React, { Component } from "react";
import axios from "axios";
import DefaultImg from "../assets/DefaultImg.png";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://c7.uihere.com/icons/501/986/413/registered-avatar-77baeefd74d99958f3d0d8be1815712a.png"
    };
  }

  // Handle diferent states filling the product description
  handleInputChange = async e => {
    console.log(e.target)
  };

  // set the attribute image
  handleImageState = async e => {
    await this.setState({
      image: e.target.src
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center mt-1">Profile</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-2">
            <div className="image-cropper shadow bg-white">
              <img
                src={this.state.image}
                alt="avatar"
                className="profile-pic"
              />
            </div>
            <div class="d-flex justify-content-center mt-3">
              <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Change avatar
              </button>
              <div class="dropdown-menu text-center">
                <a
                  class="dropdown-item"
                  style={{ display: "inline", padding: ".2rem .5rem" }}
                >
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" onClick={this.handleImageState}
                    alt="img"
                    className="option1"
                  />
                </a>
                <a
                  class="dropdown-item"
                  style={{ display: "inline", padding: ".2rem .5rem" }}
                >
                  <img
                    src="http://icons.iconarchive.com/icons/hopstarter/halloween-avatar/1024/Skull-icon.png" onClick={this.handleImageState}
                    alt="img"
                    className="option2"
                  />
                </a>
                <a
                  class="dropdown-item"
                  style={{ display: "inline", padding: ".2rem .5rem" }}
                >
                  <img
                    src="http://tpidv.com/tpidv.com/magento/atlassian-jira/WEB-INF/classes/avatars/yeti.svg" onClick={this.handleImageState}
                    alt="img"
                    className="option3"
                  />
                </a>
                <a
                  class="dropdown-item"
                  style={{ display: "inline", padding: ".2rem .5rem" }}
                >
                  <img
                    src="http://tpidv.com/tpidv.com/magento/atlassian-jira/WEB-INF/classes/avatars/dog.svg" onClick={this.handleImageState}
                    alt="img"
                    className="option4"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="formato col-sm-12 col-md-6 mt-2">
            <div className="form-group">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputUserName">User Name</label>
              <input type="text" className="form-control" id="inputUserName" />
            </div>
            <div className="d-flex justify-content-center mb-2">
              <button type="submit" className="btn btn-danger">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
