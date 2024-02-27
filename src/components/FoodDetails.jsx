import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

// Probably better ways to do this, but I really want to keep it out of git
const apiKey = localStorage.getItem("apiKey");

export default function FoodDetails({ recipeId }) {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      setIsLoading(true);
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      setRecipe(data);
      setIsLoading(false);
    }
    fetchRecipe();
  }, [recipeId]);

  return (
    <div>
      <div>
        <h1>{recipe.title}</h1>

        <img src={recipe.image} alt="" />

        <div>
          <span>
            <strong>⏲️ {recipe.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👪 Serves {recipe.servings} people</strong>
          </span>
          <span>
            {recipe.vegetarian ? "🥕 Vegetarian" : "🍖 Non Vegetarian"}
          </span>
          <span>{recipe.vegan ? "🐮 Vegan" : ""}</span>
        </div>
        <div>
          <span>💵 ${recipe.pricePerServing / 100} Per serving</span>
        </div>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          recipe.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))
        )}
      </div>
    </div>
  );
}
