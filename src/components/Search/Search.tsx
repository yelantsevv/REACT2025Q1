import { FormEvent, useRef } from 'react';
import type { State } from '../../types/types';
import styles from './Search.module.css';

export default function Search({ onSearch }: State) {
  const inputRef = useRef<HTMLInputElement>(null);
  const placeholder = localStorage.getItem('search') || 'Search...';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value || '';
    onSearch(inputValue);
    localStorage.setItem('search', inputValue);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        ref={inputRef}
        placeholder={placeholder}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}
