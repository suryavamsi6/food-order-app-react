import styles from "./Dish.module.css";
import Button from "../UI/Button";
import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";

export function Dish(props) {
  const cartCtx = useContext(CartContext);

  const amountInputRef = useRef(0);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.cost,
    });
    amountInputRef.current.value = 0;
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
          ref={amountInputRef}
        />
      </div>
      <Button type="submit">+ Add</Button>
    </form>
  );
}
