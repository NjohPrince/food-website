/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from "./cat_card.module.css";

export const Card = ({
  image,
  title1,
  title2,
}: {
  image: string;
  title1: string;
  title2: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={`${image}`} alt="image" />
      </div>
      <div className={styles.title1}>{title1}</div>
      <div className={styles.title2}>{title2}</div>
    </div>
  );
};
