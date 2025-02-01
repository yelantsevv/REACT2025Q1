import { FormEvent, useRef } from 'react';
import type { State } from '../../types/types';
import styles from './Search.module.css';
import { useLocalStorage } from '../../hooks/useLocaleStorage';

export default function Search({ onSearch }: State) {
  const [valueStorage, setStorage] = useLocalStorage('search');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value || '';
    onSearch(inputValue);
    setStorage(inputValue);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        ref={inputRef}
        placeholder="Search..."
        defaultValue={valueStorage}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}
