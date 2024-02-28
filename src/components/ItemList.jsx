import Item from "./Item";
import styles from "./itemlist.module.css";

export default function ItemList({ items, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        items.map((item) => <Item key={item.id} item={item} />)
      )}
    </div>
  );
}
