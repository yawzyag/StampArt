import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.component';
import LogReg from './log-reg';
import Home from './components/home.component';
import Footer from './components/footer.component';
import Item from './components/item.component';
import Upload from './components/upload.component';
import axios from 'axios';
import Profile from './components/profile.component';
import LandingPage from './components/landing.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
      numero: 24,
      errorMesage: '',
      user_id: '',
      redirection: false,
      user_name: '',
      user_address: ''
    };
  }
  // Handle diferent states filling the product description
  handleInputChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handle submit
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const userDisplay = {
      email,
      password
    };
    await axios
      .post('http://stampart.company:5000/api/user/login', userDisplay)
      .then(async res => {
        await this.setState({
          errorMesage: '',
          token: res.data.token,
          user_id: res.data._id
        });
        await this.setState({
          redirection: true
        });
        const { user_id } = this.state;
        await axios
          .get('http://stampart.company:5000/api/users/' + user_id)
          .then(async res => {
            await this.setState({
              user_name: res.data.name
            });
            if (res.data.user_direction) {
              await this.setState({
                user_address: res.data.user_direction
              });
            }
          })
          .catch(async err => {
            console.log(err);
          });
      })
      .catch(async err => {
        const letras = err.response.data.substring(0, 47);
        await this.setState({
          errorMesage: letras
        });
      });
  };

  handleInputUpdate = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  clickUpdate = async e => {
    e.preventDefault();
    const { email, password, user_name, user_address } = this.state;
    const userDisplay = {
      email,
      password,
      name: user_name,
      direction: user_address
    };
    await axios
      .patch(
        `http://stampart.company:5000/api/users/${this.state.user_id}`,
        userDisplay
      )
      .then(async res => {
        alert('Profile updated successfully!');
      })
      .catch(err => {
        alert('Error, Insert a valid email and password!');
      });
  };

  render() {
    return (
      <Router>
        <div className='d-flex flex-column' style={{ height: '100vh' }}>
          <Navbar token={this.state.token} />

          <Switch>
            <div className='container'>
              <Route path='/' exact component={Home} />
              <Route
                path='/upload'
                render={props => <Upload {...props} token={this.state.token} />}
              />
              <Route path='/products/:id' component={Item} />
              <Route
                path='/profile'
                render={props => (
                  <Profile
                    {...props}
                    user_name={this.state.user_name}
                    user_address={this.state.user_address}
                    email={this.state.email}
                    onUserUpdate={this.handleInputUpdate}
                    onClickUpdate={this.clickUpdate}
                  />
                )}
              />
              <>
                <div className='loginBox'>
                  <Route
                    path='/login'
                    render={props => (
                      <LogReg
                        {...props}
                        numero={this.state.numero}
                        inputChange={this.handleInputChange}
                        onSubmitClick={this.handleSubmit}
                        errorMessage={this.state.errorMesage}
                        redirect={this.state.redirection}
                      />
                    )}
                  />
                </div>
              </>
            </div>
          </Switch>
          <Route path='/landing' component={LandingPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
