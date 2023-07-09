import styles from './card.module.css';

export default function Card() {
  return (
    <div className={styles.card}>
      <div>{/* <Image /> */}</div>
      <div className={styles.cardTitle}>Roti</div>
      <div className={styles.cardCounter}>
        <div className={styles.cardMinus}>-</div>
        <div className={styles.cardCount}>1</div>
        <div className={styles.cardPlus}>+</div>
      </div>
      <button className={styles.cardButton}>Add to Lunch</button>
    </div>
  );
}
