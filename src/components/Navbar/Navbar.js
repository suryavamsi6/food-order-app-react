import styles from "./Navbar.module.css";
import Button from "../UI/Button";
import { FaShoppingCart } from "react-icons/all";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={styles.nav}>
      <h1>ReactMeals</h1>
      <Button onClick={props.onShowCart} className={styles["nav-btn"]}>
        <FaShoppingCart /> Your Cart
        <div className={styles.counter}> {numberOfCartItems}</div>
      </Button>
    </div>
  );
};

export default Navbar;
