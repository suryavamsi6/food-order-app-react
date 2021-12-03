import styles from "./Navbar.module.css";
import Button from "../UI/Button";
import { FaShoppingCart } from "react-icons/all";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h1>ReactMeals</h1>
      <Button className={styles["nav-btn"]}>
        <FaShoppingCart /> Your Cart <div className={styles.counter} />
      </Button>
    </div>
  );
};

export default Navbar;
