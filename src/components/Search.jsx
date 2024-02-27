import { useEffect, useState } from "react";
import styles from "./search.module.css";

// Probably better ways to do this, but I really want to keep it out of git
const apiKey = localStorage.getItem("apiKey");
const searchUrl = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(
        `${searchUrl}?apiKey=${apiKey}&query=${query}`
      );
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
