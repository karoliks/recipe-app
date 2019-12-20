import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="" />

      <h1>{title}</h1>
      <ol className={style.ingredients}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      {/*<p>{calories}</p>*/}
    </div>
  );
};

export default Recipe;
