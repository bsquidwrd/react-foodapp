import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";

export default function FoodList({ foodData, setfoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setfoodId={setfoodId} />
      ))}
    </div>
  );
}
