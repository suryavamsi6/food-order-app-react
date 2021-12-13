import { Dish } from "./Dish";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import styles from "./DishList.module.css";

const DishList = (props) => {
  const [items, setItems] = useState([]);
  const { sendRequest: fetchDishes, isLoading, error } = useHttp();

  const transformData = (dishObj) => {
    const loadedDishes = [];
    for (const key in dishObj) {
      console.log(key);
      loadedDishes.push({
        id: key,
        name: dishObj[key].name,
        description: dishObj[key].description,
        cost: dishObj[key].cost,
      });
    }
    setItems(loadedDishes);
  };

  useEffect(() => {
    fetchDishes(
      {
        url: "https://food-order-app-react-60fc7-default-rtdb.firebaseio.com/dishes.json",
      },
      transformData
    );
  }, [fetchDishes]);

  let content = "";
  if (isLoading) {
    content = <p className={styles.loading}>Loading...</p>;
  } else {
    content = items.map((item) => (
      <Dish
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        cost={item.cost}
      />
    ));
  }
  if (error) {
    content = <p className={styles.error}> {error}</p>;
  }

  return content;
};

export default DishList;
