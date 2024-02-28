import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

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
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{recipe.title}</h1>

        <img className={styles.recipeImage} src={recipe.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲️ {recipe.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👪 <strong>Serves {recipe.servings} people</strong>
          </span>
          <span>
            <strong>
              {recipe.vegetarian ? "🥕 Vegetarian" : "🍖 Non Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{recipe.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            $ <strong>{recipe.pricePerServing / 100} Per serving</strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <ItemList items={recipe.extendedIngredients} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              recipe.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
