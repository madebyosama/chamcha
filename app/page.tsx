import Image from 'next/image';
import styles from './page.module.css';
import Menu from './components/menu/menu';
import Form from './components/form/form';

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      <Form />
    </main>
  );
}
