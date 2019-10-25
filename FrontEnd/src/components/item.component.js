import React, { useState, useEffect } from "react";
import moment from "moment";
import "../App.css";

function Item({ match }) {

    const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
        const fetchItem = await fetch(
          `http://localhost:5000/api/products/${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);
      };
    fetchItem();
  }, [match]);

  return (
    <div>
      <div className="card mb-2 mt-2 shadow p-3 mb-5 bg-white rounded border-light">
        <img src={item.p_image} className="card-img-top mx-auto " alt={ item.product_name } />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#f44336" }}><b>{item.product_name}</b></h5>
          <p className="card-text">{item.description}</p>
          <p className="card-quantity"><b  style={{ color: "#f44336" }}>Available: </b> { item.quantity }</p>
          <p className="card-text">
            <small className="text-muted">
              {moment(item.date).format("LL")}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
