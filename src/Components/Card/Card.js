import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>

      {/* <div>
        <h3>Name:</h3>
        <h3>House:</h3>
        <h3>Army:</h3>
        <h3>Gold:</h3>
        <h3>Kingdom:</h3>
      </div> */}
    </div>
  );
};

export default Card;
