import React from "react";
import "./Card.css";

function Card() {
  return (
    <div>
      <div className="card">
        <img
          src="./assets/images/one.jpg"
          className="card-img-top card-img"
        ></img>
        <div className="middle"></div>
      </div>
    </div>
  );
}

export default Card;
