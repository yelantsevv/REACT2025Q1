import { FormEvent, useRef } from 'react';
import type { State } from '../../types/types';
import styles from './Search.module.css';
import { useNavigate } from 'react-router';
import { helper } from '../../helpers';

export default function Search({ pageLink }: State) {
  const navigate = useNavigate();
  const { search } = helper.useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value || '';
    pageLink(`?search=${inputValue}`);
    navigate(`?search=${inputValue}`);
  };

  return (
    <form
      data-testid=" search"
      className={styles.search}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        type="text"
        ref={inputRef}
        placeholder="Search..."
        defaultValue={search}
        data-testid="input"
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}
