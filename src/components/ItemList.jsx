import Item from "./Item";
import styles from "./itemlist.module.css";

export default function ItemList({ items, isLoading }) {
  return (
    <div className={styles.itemList}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        items.map((item, index) => (
          <Item key={`${index}-${item.id}`} item={item} />
        ))
      )}
    </div>
  );
}
