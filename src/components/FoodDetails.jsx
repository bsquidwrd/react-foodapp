import { useEffect, useState } from "react";

// Probably better ways to do this, but I really want to keep it out of git
const apiKey = localStorage.getItem("apiKey");

export default function FoodDetails({ recipeId }) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      setRecipe(data);
    }
    fetchRecipe();
  }, [recipeId]);

  return (
    <div>
      Food Details {recipeId}
      {recipe.title}
      <img src={recipe.image} />
    </div>
  );
}
