import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './form.module.css';

interface FormProps {
  items: any[]; // Update with the appropriate type for items
}

export default function Form({ items }: FormProps) {
  console.log(items);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Do something with the form data (e.g., send it to the server)
    console.log('Form submitted:', { name, phone, address });
  };

  return (
    <div className={styles.form}>
      <div className={styles.items}>
        {items
          ? items.map((i) => {
              return (
                <div key={i.title} className={styles.item}>
                  <div>{i.title}</div>
                  <div>X {i.number}</div>
                </div>
              );
            })
          : ''}
      </div>
      <div>
        <input
          name='name'
          placeholder='Name'
          className={styles.formInput}
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          name='phone'
          placeholder='Phone'
          type='number'
          className={styles.formInput}
          value={phone}
          onChange={handlePhoneChange}
          required
        />
        <textarea
          name='address'
          placeholder='Address'
          className={styles.formInput}
          value={address}
          onChange={handleAddressChange}
          required
        />
        <button className={styles.formSubmit} onClick={handleSubmit}>
          Place Order
        </button>
      </div>
    </div>
  );
}
