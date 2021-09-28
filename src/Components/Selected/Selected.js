import React from "react";
import "./Selected.css";

const Selected = (props) => {
  const { imageUrl, title, army, region } = props.lord;
  return (
    <div className="selected-item">
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>
          <small>Army: {army}</small> <small>Region: {region}</small>
        </p>
      </div>
    </div>
  );
};

export default Selected;
