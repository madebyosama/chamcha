'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Menu from './components/menu/menu';
import Form from './components/form/form';
import { useState } from 'react';

interface Item {
  title: string;
  number: number;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  const addTheItem = (title: string, number: number) => {
    const existingItemIndex = items.findIndex((item) => item.title === title);

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex] = { title, number };
      setItems(updatedItems);
    } else {
      setItems((prevItems) => [...prevItems, { title, number }]);
    }
  };

  return (
    <main className={styles.main}>
      <Menu addTheItem={addTheItem} />
      <Form items={items} />
    </main>
  );
}
