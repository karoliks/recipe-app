import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import Burger from "./BurgerForRescipeSearch.svg";

const APP_ID = "2832d27a";
const APP_KEY = "dda7e49d2eecdfec712f65eb966f73b2";

const getRecipes = async query => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  return response.json();
};

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chickpea");

  useEffect(() => {
    getRecipes(query).then(data => {
      setRecipes(data.hits);
    });
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="header">
        <img className="burger" src={Burger} alt="Burger" />
        <h1 className="title">The recipe finder</h1>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          <b>Search</b>
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
