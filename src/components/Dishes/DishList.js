import { Dish } from "./Dish";

const items = [
  {
    id: "1",
    name: "Sushi",
    description: "Finest fish and veggies",
    cost: "22.99",
  },
  {
    id: "2",
    name: "Schnitzel",
    description: "A german speciality",
    cost: "16.50",
  },
  {
    id: "3",
    name: "Barbeque Burger",
    description: "American, raw, meaty",
    cost: "12.99",
  },
  {
    id: "4",
    name: "Green Bowl",
    description: "Health...and green...",
    cost: "18.99",
  },
];

const DishList = () => {
  return items.map((item) => (
    <Dish
      key={item.id}
      name={item.name}
      description={item.description}
      cost={item.cost}
    />
  ));
};

export default DishList;
