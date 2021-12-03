import styles from "./Dish.module.css";
import Button from "../UI/Button";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

export function Dish(props) {
  const ctx = useContext(CartContext);
  const [enteredQuant, setEnteredQuant] = useState({
    title: props.name,
    cost: props.cost,
    quantity: "",
  });

  const inputChangeHandler = (event) => {
    setEnteredQuant((prevState) => {
      return {
        ...prevState,
        quantity: event.target.value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredQuant.quantity > 0) {
      console.log(enteredQuant.quantity);
      const index = ctx.findIndex((item) => item.title === props.name);
      if (index >= 0) {
        ctx[index].quantity = enteredQuant.quantity;
      } else {
        ctx.push(enteredQuant);
      }
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles["dish"]}>
      <h1>{props.name}</h1>
      <h3>{props.description}</h3>
      <h1 className={styles.price}>${props.cost}</h1>
      <div className={styles.quantity}>
        <h1>Amount</h1>
        <input
          type="number"
          step="1"
          defaultValue="0"
          min="0"
          onChange={inputChangeHandler}
        />
      </div>
      <Button type="submit">+ Add</Button>
    </form>
  );
}
