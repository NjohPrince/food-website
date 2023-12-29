/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from "./testimonials.module.css";
import { Container } from "../../molecules/container/container.molecules";
export const Testimonials = () => {
  return (
    <Container>
      <div className={styles.box}>
        <div className={styles.imagebox}>
            <img src="./pngwing 2.png" alt="image" />
        </div>
        <div className={styles.content_box}>
          <div className={styles.title}>
            <span>Testimonals</span>
          </div>
          <div className={styles.article1}>
            <span>What Our Customers Say About Us</span>
          </div>
          <div className={styles.article2}>
            <span>
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </Container>
  );
};
