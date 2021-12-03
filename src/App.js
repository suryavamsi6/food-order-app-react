import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Dishes from "./components/Dishes/Dishes";
import CartContext from "./store/cart-context";

function App() {
  return (
    <CartContext.Provider value={[]}>
      <Navbar />
      <About />
      <Dishes />
    </CartContext.Provider>
  );
}

export default App;
