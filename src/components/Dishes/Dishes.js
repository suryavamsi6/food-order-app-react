import styles from "./Dishes.module.css";
import Card from "../UI/Card";
import DishList from "./DishList";

const Dishes = () => {
  return (
    <div className={styles["dishes-div"]}>
      <Card className={styles["dishes-card"]}>
        <DishList />
      </Card>
    </div>
  );
};

export default Dishes;
