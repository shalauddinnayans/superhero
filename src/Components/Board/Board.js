import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Board.css";
import "./peopleDb.json";

const Board = () => {
  const [persion, setPersion] = useState([]);
  useEffect(() => {
    fetch("./peopleDb.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="board-container">
      <div className="mans-container">
        <Card></Card>
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Board;
