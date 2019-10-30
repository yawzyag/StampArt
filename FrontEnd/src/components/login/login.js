import React from "react";
import { withRouter } from 'react-router-dom';
import "./style.scss";

class Login extends React.Component {

  componentDidUpdate() {
    if (this.props.redirect === true)
      this.props.history.push('/')
  }
  render() {
    console.log(this.props)
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Username</label>
              <input type="text" name="email" placeholder="email" onChange={this.props.inputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.props.inputChange} />
            </div>
            {this.props.errorMessage === '' ? '' :
              <div class="alert alert-danger center-block" role="alert">
                <small className="text-center" >
                  {this.props.errorMessage}</small>
              </div>}
          </div>
        </div>
        <div className="footer">
          <button type="button" className="boton" onClick={this.props.onSubmitClick} >
            Login
          </button>

        </div>
      </div>
    );
  }
}

export default withRouter(Login);