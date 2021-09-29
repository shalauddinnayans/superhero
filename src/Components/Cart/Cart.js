import React from "react";
import Selected from "../Selected/Selected";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalArmy = 0;
  for (const lord of cart) {
    totalArmy += lord.army;
  }
  return (
    <div>
      <h1>War Power</h1>
      <h4>Total Army: {totalArmy}</h4>
      <div className="items">
        {cart.map((lord) => (
          <Selected key={lord.id} lord={lord}></Selected>
        ))}
      </div>
      <button className="btn btn-primary" type="button">
        Declare War
      </button>
    </div>
  );
};

export default Cart;
