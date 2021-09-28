import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = (props) => {
  const { imageUrl, title, name, family, army, gold, region } = props.person;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={imageUrl} className="img-sizeing card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title cart-title-tex">{title}</h5>
          <div className="card-text">
            <h6>Name: {name}</h6>
            <h6>Family: {family}</h6>
            <h6>Army: {army}</h6>
            <h6>Gold: {gold}</h6>
            <h6>Region: {region}</h6>
          </div>
        </div>
        <button
          onClick={() => props.handleAddCart(props.person)}
          className="btn-redguler"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
