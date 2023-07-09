import styles from './card.module.css';
import Image, { StaticImageData } from 'next/image';

export default function Card({
  title,
  image,
}: {
  title: string;
  image: StaticImageData;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        {<Image src={image} alt='Menu Image' width={160} height={160} />}
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardCounter}>
        <div className={styles.cardMinus}>-</div>
        <div className={styles.cardCount}>1</div>
        <div className={styles.cardPlus}>+</div>
      </div>
      <button className={styles.cardButton}>Add to Lunch</button>
    </div>
  );
}
