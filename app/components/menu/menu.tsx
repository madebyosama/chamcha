import styles from './menu.module.css';
import Card from '../card/card';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Card title='Salan' />
      <Card title='Roti' />
    </div>
  );
}
