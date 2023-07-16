'use client';

import styles from './card.module.css';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

export default function Card({
  title,
  image,
  addToCartFunction,
}: {
  title: string;
  image: StaticImageData;
  addToCartFunction: (title: string, number: number) => void;
}) {
  const [number, setNumber] = useState(1);
  const handleAddToCart = (title: string, number: number) => {
    addToCartFunction(title, number);
  };
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
      <button
        className={styles.cardButton}
        onClick={() => handleAddToCart(title, number)}
      >
        Add to Lunch
      </button>
    </div>
  );
}
