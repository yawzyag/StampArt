import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products(onHandleProps) {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("http://stampart.company:5000/api/products");

    const items = await data.json();
    setItems(items);
  };

  return (
    <div>
      <h2 className="mb-5" style={{ textAlign: "center", fontFamily: "'Convergence', sans-serif" }}>Products</h2>
      <div className="row mx-auto">
        {items.map(item => (
          <div className="col-lg-4 col-sm-6 mb-3" key={item._id}>
            <div className="card mx-auto shadow p-3 mb-5 bg-white rounded border-light" style={{ maxWidth: "18rem" }}>
              <img
                src={item.p_image}
                className="card-img-top d-block img-fluid rounded mx-auto w-50 mt-3"
                alt="grey_Hoodie"
              />
              <div className="card-body">
                <Link to={`/products/${item._id}`} style={{ color: "#f44336" }}>
                  <h5 className="card-title" >{item.product_name}</h5>
                </Link>
                <p className="card-text">
                  {item.description}
                </p>
                <button className="btn btn-danger" onClick={() => onHandleProps.onClickCart(item._id)}>
                  <i className="fas fa-shopping-cart"></i> Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
