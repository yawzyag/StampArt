import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mt-1">Profile</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-2">
            <div className="image-cropper shadow bg-white">
              <img
                src="https://www.redditstatic.com/avatars/avatar_default_06_008985.png"
                alt="avatar"
                className="profile-pic"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-outline-danger mt-4">
                Change Avatar
              </button>
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
