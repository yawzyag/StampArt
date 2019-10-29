import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <form>
          <div className="row">
            <div className="col-6 mt-5">
              <div class="image-cropper">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RJT4D00AjuD5xaHqmulkRZka-TWvtu2izvGlP43jctqKXuwo&s"
                  alt="avatar"
                  class="profile-pic"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-outline-danger mt-4">
                  Change Avatar
                </button>
              </div>
            </div>
            <div className="col-6 mt-5">
              <div class="form-row">
                <div class="form-group">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <label for="inputPassword4">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div class="form-group">
                  <label for="inputUserName">User Name</label>
                  <input type="text" class="form-control" id="inputUserName" />
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-danger">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Profile;
