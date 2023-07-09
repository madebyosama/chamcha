import styles from './form.module.css';

export default function Form() {
  return (
    <div className={styles.form}>
      <div>
        <input
          name='name'
          placeholder='Name'
          className={styles.formInput}
          required
        />
        <input
          name='phone'
          placeholder='Phone'
          type='number'
          className={styles.formInput}
          required
        />
        <textarea
          name='address'
          placeholder='Address'
          className={styles.formInput}
          required
        />
        <button className={styles.formSubmit}>Place Order</button>
      </div>
    </div>
  );
}
