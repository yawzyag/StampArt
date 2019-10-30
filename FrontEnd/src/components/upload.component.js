import React, { Component } from 'react';
import axios from 'axios';
import DefaultImg from '../assets/DefaultImg.png';
import { Progress } from 'reactstrap'


// base api url being used
const API_URL = "http://localhost:5000/api/products";

class Upload extends Component {
  form = {};
  constructor(props) {
    super(props);
    this.state = {
      p_name: '',
      description: '',
      quantity: 0,
      multerImage: DefaultImg,
      image: '',
      progress: 0,
      message: ''
    }
  }

  // Reset the state of the component
  setDefaultImage = async (uploadType) => {
    if (uploadType === "multer") {
      await this.setState({
        multerImage: DefaultImg,
        progress: 0
      });
    }
    this.form['p_name'].value = '';
    this.form['description'].value = '';
    this.form['quantity'].value = '';
  }

  // Handle diferent states filling the product description
  handleInputChange = async e => {
    this.form[e.target.name] = e.target;
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  // set the attribute image 
  handleImageState = async (e) => {

    this.setState({
      multerImage: URL.createObjectURL(e.target.files[0])
    });
    await this.setState({
      image: e.target.files[0]
    });
  }

  // function to upload image once it has been captured
  // includes multer and firebase methods
  uploadImage = async (e, method) => {
    e.preventDefault();

    if (method === "multer" && this.state.p_name.length > 4) {

      const imageFormObj = new FormData();

      imageFormObj.append("p_image", this.state.image);
      imageFormObj.append("product_name", this.state.p_name);
      imageFormObj.append("description", this.state.description);
      imageFormObj.append("quantity", parseInt(this.state.quantity));

      // stores a readable instance of 
      // the image being uploaded using multer
      await axios.post(`${API_URL}`, imageFormObj, {
        onUploadProgress: async progressEvent => {
          console.log(Math.round(progressEvent.loaded / progressEvent.total * 100))
          await this.setState({
            progress: Math.round(progressEvent.loaded / progressEvent.total * 100)
          });
        }
      })
        .then((data) => {
          this.setDefaultImage("multer");
          alert(`Your ${data.data.product_name} has been successfully uploaded!!!`);
        })
        .catch((err) => {
          console.log(err);
          this.setDefaultImage("multer");
        });
    }
  }

  render() {
    return (
      <div>
        <h1 className="main-heading text-center mt-3">Create Your product!!!</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-2">
            <img src={this.state.multerImage} alt="upload-img" className="rounded mx-auto shadow d-block" style={{ maxWidth: "62%" }} />
            <div className="custom-file d-block mx-auto" style={{ maxWidth: "62%" }}>
              <input type="file" className="custom-file-input process_upload-btn" id="inputFile" aria-describedby="inputFile" onChange={(e) => this.handleImageState(e)} />
              <label className="custom-file-label" htmlFor  ="inputFile">Choose file</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-3">
            <form className="mt-4">
              <div className="form-group row">
                <label htmlFor="p_name" className="col-sm-3 col-form-label">Proyect Name</label>
                <div className="col-sm-9">
                  <input type="p_name" className="form-control" id="p_name" placeholder="Proyect Name" name='p_name' onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="description" className="col-sm-3 col-form-label">Description</label>
                <div className="col-sm-9">
                  <input type="description" className="form-control" id="description" placeholder="Description" name='description' onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="p_available" className="col-sm-3 col-form-label">Available</label>
                <div className="col-sm-9">
                  <input type="p_available" className="form-control" id="p_available" placeholder="Products Available" name='quantity' onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row d-flex justify-content-center">
                <button type="submit" className="btn btn-danger btn-lg" onClick={(e) => this.uploadImage(e, "multer")}>Sign in</button>
              </div>
            </form>
          </div>
        </div>
        {this.state.progress > 0 ? <Progress animated color="danger" value={this.state.progress}>{this.state.progress}%!!!</Progress> : ''}
      </div>
    );
  }
}

export default Upload;