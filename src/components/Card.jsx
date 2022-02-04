import React, { Component } from "react";
import "../scss/card.scss";
import Baner from "./Baner";

const Card = ({ info }) => {
  return (
    <div className={`cards ${info.cardColor} ${info.index}`}>
      {info.baner ? <Baner /> : null}
      <div className="image">
        <img src={`/images/${info.image}`} alt="sin foto de perfil" />
      </div>
      <div className="">
        <h3>{info.name}</h3>
        <small>{info.state}</small>
      </div>
      <h4>{info.title}</h4>
      <p>{info.text}</p>
    </div>
  );
};

export default Card;
