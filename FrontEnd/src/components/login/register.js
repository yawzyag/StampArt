import React from "react";
import "./style.scss";

export class Register extends React.Component {

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input type="text" name="user_name" placeholder="name" onChange={this.props.inputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange={this.props.inputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.props.inputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="direction">Address</label>
              <input type="Address" name="user_address" placeholder="address" onChange={this.props.inputChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="boton" onClick={this.props.onClickRegister}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;