import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Dishes from "./components/Dishes/Dishes";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <About />
      <Dishes />
    </CartProvider>
  );
}

export default App;
