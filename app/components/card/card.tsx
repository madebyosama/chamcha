'use client';

import styles from './card.module.css';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

export default function Card({
  title,
  image,
}: {
  title: string;
  image: StaticImageData;
}) {
  const [number, setNumber] = useState(1);
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        {<Image src={image} alt='Menu Image' width={160} height={160} />}
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardCounter}>
        <div
          className={styles.cardMinus}
          onClick={() => (number === 1 ? '' : setNumber(number - 1))}
        >
          -
        </div>
        <div className={styles.cardCount}>{number}</div>
        <div
          className={styles.cardPlus}
          onClick={() =>
            title === 'Salan'
              ? number === 3
                ? ''
                : setNumber(number + 1)
              : setNumber(number + 1)
          }
        >
          +
        </div>
      </div>
      <button className={styles.cardButton}>Add to Lunch</button>
    </div>
  );
}
