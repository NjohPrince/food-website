/* eslint-disable jsx-a11y/img-redundant-alt */
import { Rating } from "../../atoms/icons/rating.icon";
import styles from "./s_dishes.module.css";
import { SpecialLikeIcon } from "../../atoms/icons/specialikeicon/speciallike.icon";

export const SpecialDishesCard = ({
  image,
  title1,
  title2,
  price,
  rating,
}: {
  image: string;
  title1: string;
  title2: string;
  price: string;
  rating: string;
}) => {
  return (
    <div className={styles.box}>
      <SpecialLikeIcon />
      <div className={styles.img_box}>
        <img src={`${image}`} alt="image" />
      </div>
      <div className={styles.title1}>
        <span>{title1}</span>
      </div>
      <div className={styles.title2}>
        <span>{title2}</span>
      </div>
      <div className={styles.price_rating}>
        <div className={styles.price}>
          <span>
            <span className={styles.dollar}>$</span>
            {price}
          </span>
        </div>
        <div className={styles.rating}>
          <span className={styles.star}>
            <Rating />
          </span>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};
