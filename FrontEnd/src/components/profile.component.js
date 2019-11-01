import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://c7.uihere.com/icons/501/986/413/registered-avatar-77baeefd74d99958f3d0d8be1815712a.png"
    };
  }


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
            <div className="d-flex justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Change avatar
              </button>
              <div className="dropdown-menu text-center">
                <div
                  className="dropdown-item"
                  style={{ display: "inline", padding: ".2rem .5rem" }}
                >
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" onClick={this.handleImageState}
                    alt="img"
                    className="option1"
                  />
                </div>
                <div
                  className="dropdown-item"
                  style={{ display: "inline", padding: ".2rem .5rem" }}
                >
                  <img
                    src="http://icons.iconarchive.com/icons/hopstarter/halloween-avatar/1024/Skull-icon.png" onClick={this.handleImageState}
                    alt="img"
                    className="option2"
                  />
                </div>
                <div
                  className="dropdown-item"
                  style={{ display: "inline", padding: ".2rem .5rem" }}
                >
                  <img
                    src="http://tpidv.com/tpidv.com/magento/atlassian-jira/WEB-INF/classes/avatars/yeti.svg" onClick={this.handleImageState}
                    alt="img"
                    className="option3"
                  />
                </div>
                <div
                  className="dropdown-item"
                  style={{ display: "inline", padding: ".2rem .5rem" }}
                >
                  <img
                    src="http://tpidv.com/tpidv.com/magento/atlassian-jira/WEB-INF/classes/avatars/dog.svg" onClick={this.handleImageState}
                    alt="img"
                    className="option4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="formato col-sm-12 col-md-6 mt-2">
            <div className="form-group">
              <label htmlFor="inputEmail4">Email</label>
              <input
                onChange={this.props.onUserUpdate}
                name="email"
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                defaultValue={this.props.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword4">Password</label>
              <input
                name="password"
                onChange={this.props.onUserUpdate}
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                onChange={this.props.onUserUpdate}
                type="text"
                name="user_address'"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                defaultValue={this.props.user_address.lenght === 0 ? '' : this.props.user_address}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputUserName">User Name</label>
              <input name="user_name" onChange={this.props.onUserUpdate} defaultValue={this.props.user_name} type="text" className="form-control" id="inputUserName" />
            </div>
            <div className="d-flex justify-content-center mb-2">
              <button type="submit" onClick={this.props.onClickUpdate} className="btn btn-danger">
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
