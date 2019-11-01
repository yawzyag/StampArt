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
import Cart from './components/cart.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // single state of true
      email: '',
      password: '',
      token: '',
      numero: 24,
      errorMesage: '',
      user_id: '',
      redirection: false,
      user_name: '',
      user_address: '',
      count: 0,
      user_cart_id: '',
      product_id: '',
      products: [],
      cosas: [],
      total_price: 0
    };
  }

  // Handle diferent states filling the product description
  handleInputChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Function to get the input for updating
  handleInputUpdate = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCartDelete = async e => {
    await this.setState({
      count: 0,
      cosas: [],
      products: []
    });
    const { user_cart_id } = this.state;
    const axiosConfig = {
      headers: {
        'auth-token': this.state.token
      }
    };
    await axios
      .delete(
        `http://stampart.company:5000/api/cart/${user_cart_id}`, axiosConfig
      )
      .then(async res => {
        console.log(res.data._id)
      })
      .catch(err => {
        alert('Error');
      });
  };
  //
  handleCartAument = async e => {
    await this.setState({
      count: this.state.count + 1
    });
    const { user_cart_id } = this.state;
    const userDisplay = {
      product_id: e
    };
    const axiosConfig = {
      headers: {
        'auth-token': this.state.token
      }
    };
    await axios
      .patch(
        `http://stampart.company:5000/api/cart/${user_cart_id}`,
        userDisplay, axiosConfig
      )
      .then(async res => {
        console.log(res.data._id)
      })
      .catch(err => {
        alert('Error');
      });
  }

  // handle submit for posting login user
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
              user_name: res.data.name,
              user_cart_id: res.data.cart_id._id
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
    const axiosConfig = {
      headers: {
        'auth-token': this.state.token
      }
    };
    const { user_cart_id } = this.state;
    await axios
      .get(
        `http://stampart.company:5000/api/cart/${user_cart_id}`, axiosConfig
      )
      .then(async res => {
        await this.setState({
          count: res.data.products.length
        });
      })
      .catch(err => {
        alert('Error');
      });
  };

  // handle submit register for posting login
  handleRegister = async e => {
    e.preventDefault();
    const { user_name, email, password, user_address } = this.state;
    const userDisplay = {
      email,
      password,
      direction: user_address,
      name: user_name
    };
    console.log(userDisplay)
    await axios
      .post('http://stampart.company:5000/api/user/register', userDisplay)
      .then(async res => {
        await this.setState({
          errorMesage: ''
        });
        alert("User Ceated! Please click on the login to enjoy our application")
      })
      .catch(async err => {
        const letras = err.response.data;
        alert(letras)
        await this.setState({
          errorMesage: letras
        });
      });
  }

  // Function to handle the click button for patch
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
  handlelogout = () => {
    this.setState({
      token: ""
    })
    window.location.reload(false);
  }

  render() {
    return (
      <Router>
        <div className='d-flex flex-column' style={{ height: '100vh' }}>
          <Navbar token={this.state.token} user_name={this.state.user_name} onLogout={this.handlelogout} count={this.state.count} />
          <Switch>
            <>
              <div className='container'>
                <Route path='/home' render={props => <Home {...props} onClickCart={this.handleCartAument} />} />
                <Route
                  path='/upload'
                  render={props => <Upload {...props} token={this.state.token} user_id={this.state.user_id} />}
                />
                <Route path='/cart' render={props => <Cart {...props} products={this.state.products} token={this.state.token} user_cart_id={this.state.user_cart_id} total_price={this.state.total_price} cosas={this.state.cosas} count={this.state.count} OnCartDelete={this.handleCartDelete} />} />
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
                          user_id={this.state.user_id}
                          inputChange={this.handleInputChange}
                          onSubmitClick={this.handleSubmit}
                          onClickRegister={this.handleRegister}
                          errorMessage={this.state.errorMesage}
                          redirect={this.state.redirection}
                        />
                      )}
                    />
                  </div>
                </>
              </div>

              <Route path="/" exact component={LandingPage} />
            </>
          </Switch>
          <Route path='/landing' component={LandingPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
