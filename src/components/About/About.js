import styles from "./About.module.css";
import Card from "../UI/Card";
import mealsImage from "../../assets/meals.jpg";

const About = () => {
  return (
    <div className={styles["about-div"]}>
      <div className={styles["main-image"]}>
        <img src={mealsImage} />
      </div>
      <Card className={styles["about-card"]}>
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Card>
    </div>
  );
};

export default About;
