import { useEffect, useState } from "react";

const apiKey = "";
const searchUrl = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search() {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(
        `${searchUrl}?apiKey=${apiKey}&query=${query}`
      );
      const data = await response.json();
      console.log(data.results);
    }
    // fetchFood();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
