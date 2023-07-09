import styles from './menu.module.css';
import Card from '../card/card';
import Roti from '../../assets/images/roti.png';
import Salan from '../../assets/images/salan.png';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Card title='Salan' image={Salan} />
      <Card title='Roti' image={Roti} />
    </div>
  );
}
