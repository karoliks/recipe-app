import React from "react";
import "./App.css";
import Burger from "./BurgerForRescipeSearch.svg";

const Top = () => {
  return (
    <div className="header">
      <img className="burger" src={Burger} alt="Burger" />
      <h1 className="title">The recipe finder</h1>
    </div>
  );
};

export default Top;
