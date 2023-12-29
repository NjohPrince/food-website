import styles from "./storyandservices.module.css";
import { Container } from "../../molecules/container/container.molecules";
import { SSCard } from "../../molecules/sscard/sscard.molecule";

export const StoryAndServices = () => {
  return (
    <Container>
      <div className={styles.box}>
        <div className={styles.content_box}>
          <div className={styles.title}>
            <span>Our Story & Services</span>
          </div>
          <div className={styles.article1}>
            <span>Our Culinary Journey And Services</span>
          </div>
          <div className={styles.article2}>
            <span>
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </span>
          </div>
          <button className={styles.button}>Explore</button>
        </div>
        <div className={styles.card_box}>
          <div>
            <SSCard
              image="./fi-rr-salad.png"
              title1="Catering"
              title2="Delight your guests with our flavors and  presentation"
            />
            <SSCard
              image="./fi-rr-time-fast.png"
              title1="Fast delivery"
              title2="We deliver your order promptly to your door"
            />
          </div>
          <div>
            <SSCard
              image="./fi-rr-shopping-cart-check.png"
              title1="Online Ordering"
              title2="Explore menu & order with ease using our Online Ordering "
            />
            <SSCard
              image="./fi-rr-gift.png"
              title1="Gift Cards"
              title2="Give the gift of exceptional dining with Foodi Gift Cards"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
