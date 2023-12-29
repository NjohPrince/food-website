import { Container } from "../../molecules/container/container.molecules";
import styles from "./categories.module.css";
import { Card } from "../../molecules/cat_card/car_card.molecules";

export const Categories = () => {
  return (
    <div className={styles.cat_container}>
      <Container>
        <div className={styles.innerContainer}>
          <div className={styles.title}>
            <span>Customer favorites</span>
          </div>
          <div className={styles.title_2}>
            <span>Popular Categories</span>
          </div>
          <div className={styles.cat_cards}>
            <Card image="./pngwing 4.png" title1="Main Dish" title2="(86 dishes)" />
            <Card image="pngwing 6.png" title1="Break Fast" title2="(12 break fast)" />
            <Card image="pngwing 3.png" title1="Dessert" title2="(48 dessert)" />
            <Card image="pngwing 7.png" title1="Browse All" title2="(255 Items)" />
          </div>
        </div>
      </Container>
    </div>
  );
};
