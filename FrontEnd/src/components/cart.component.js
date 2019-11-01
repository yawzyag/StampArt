import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cosas: [],
      count: this.props.count,
      total_price: 0
    }
  }

  componentDidMount = async () => {
    const { user_cart_id } = this.props;
    const axiosConfig = {
      headers: {
        'auth-token': this.props.token
      }
    };
    await axios
      .get(
        `http://stampart.company:5000/api/cart/${user_cart_id}`, axiosConfig
      )
      .then(async res => {
        await this.setState({
          products: res.data.products,
          count: res.data.products.length
        });
      })
      .catch(err => {
        alert('Error');
      });

    this.state.products.forEach(item => {
      axios.get(`http://stampart.company:5000/api/products/${item}`).then(async res => {
        await this.setState({
          cosas: [...this.state.cosas, res.data],
          total_price: this.state.total_price + res.data.price
        });
      }).catch(err => { console.log(err) })
    })

  }

  render() {
    return (
      <>
        <div className="container mt-3" style={{ maxWidth: "540px" }}>
          <ul className="list-group">
            {this.state.cosas.map(item => (
              <li key={item._id} className="list-group-item">
                <div className="card mb-3" >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={item.p_image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.product_name}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text"><small className="text-muted">$ {item.price}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {this.state.products.length === 0 ? <h1>No ITEMS!!</h1> : <div className="m-3">
            <Link to="/"><div className="btn btn-danger" onClick={this.props.OnCartDelete}>
              Delete Items!</div></Link>
            <button className="btn btn-success float-right m-0">
              {this.state.total_price}
            </button>
          </div>}
        </div>
      </>
    )
  }
}

export default withRouter(Cart);
