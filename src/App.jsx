import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [recipeId, setRecipeId] = useState("656329");

  return (
    <div className="App">
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setRecipeId={setRecipeId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails recipeId={recipeId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
