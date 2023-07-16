'use client';

import styles from './menu.module.css';
import Card from '../card/card';
import Roti from '../../assets/images/roti.png';
import Salan from '../../assets/images/salan.png';

export default function Menu({
  addTheItem,
}: {
  addTheItem: (title: string, number: number) => void;
}) {
  const addToCart = (title: string, number: number) => {
    addTheItem(title, number);
  };
  return (
    <div className={styles.menu}>
      <Card title='Salan' image={Salan} addToCartFunction={addToCart} />
      <Card title='Roti' image={Roti} addToCartFunction={addToCart} />
    </div>
  );
}
