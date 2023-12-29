import styles from "./sscard.module.css";

export const SSCard = ({
  image,
  title1,
  title2,
}: {
  image: string;
  title1: string;
  title2: string;
}) => {
  return (
    <div className={styles.box}>
      <div className={styles.img_box}>
        <img src={`${image}`} alt={image} />
      </div>
      <div className={styles.title1}>
        <span>{title1}</span>
      </div>
      <div className={styles.title2}>
        <span>{title2}</span>
      </div>
    </div>
  );
};
