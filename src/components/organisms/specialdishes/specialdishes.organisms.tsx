import { Container } from "../../molecules/container/container.molecules"
import styles from "./specialdishes.module.css"
import { SpecialDishesCard } from "../../molecules/specialdishescard/s_dishes.molecules"

export const SpecialDishers = () => {
    return (
        <Container>
            <div className={styles.container}>
                <div className={styles.title}><span>Special Dishes</span></div>
                <div className={styles.title2_container}>
                    <div className={styles.title2}>
                        <span>Standout Dishes From Our Menu</span>
                    </div>
                    <div></div>
                </div>
                <div className={styles.dished_container}>
                    <SpecialDishesCard image="./Fattoush salad.png"  title1="Fattoush salad" title2="Description of the item" price="24.00" rating="4.9"/>
                    <SpecialDishesCard image="./Vegetable salad.png"  title1="Fattoush salad" title2="Description of the item" price="24.00" rating="4.9"/>
                    <SpecialDishesCard image="/Fattoush salad.png"  title1="Fattoush salad" title2="Description of the item" price="24.00" rating="4.9"/>
                </div>
            </div>
        </Container>
    )
}