import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Board.css";

const Board = () => {
  const [persons, setPerson] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./peopleDb.JSON")
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);

  const handleAddCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart);
  };

  return (
    <div className="board-container">
      <div className="mans-container row row-cols-1 row-cols-md-3 g-4">
        {persons.map((person) => (
          <Card
            key={person.id}
            person={person}
            handleAddCart={handleAddCart}
          ></Card>
        ))}
      </div>
      <div className="cart-container">
        <h1>hello world</h1>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Board;
