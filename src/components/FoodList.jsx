import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";

export default function FoodList({ foodData, setRecipeId }) {
  return (
    <div className={styles.foodList}>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setRecipeId={setRecipeId} />
      ))}
    </div>
  );
}
