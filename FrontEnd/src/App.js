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
      redirection: false
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
    console.log(this.state)
    const { email, password } = this.state;
    const userDisplay = {
      email,
      password
    };
    await axios
      .post('http://localhost:5000/api/user/login', userDisplay)
      .then(async res => {
        console.log(res.data.token);
        await this.setState({
          errorMesage: '',
          token: res.data.token,
          user_id: res.data._id
        });
        console.log(this.state.user_id)
        await this.setState({
          redirection: true
        });
      })
      .catch(async err => {
        console.log(err.response);
        const letras = err.response.data.substring(0, 47)
        await this.setState({
          errorMesage: letras
        });
      });
  };
  render() {
    return (
      <Router>
        <div className='d-flex flex-column' style={{ height: '100vh' }}>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/upload' render={(props) => <Upload {...props} token={this.state.token} />} />
              <Route path='/products/:id' component={Item} />
              <>
                <div className='loginBox'>
                  <Route path='/login' render={(props) => <LogReg {...props} numero={this.state.numero} inputChange={this.handleInputChange} onSubmitClick={this.handleSubmit} errorMessage={this.state.errorMesage} redirect={this.state.redirection} />} />
                </div>
              </>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
