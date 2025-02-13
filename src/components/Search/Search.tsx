import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router';
import styles from './Search.module.css';
import { helper } from '../../helpers';
import { useGetPeopleListQuery } from '../../store/Redux/api';
import { useLocalStorage } from '../../hooks';

export default function Search() {
  const [query, setQuery] = useLocalStorage('query');
  useGetPeopleListQuery(query);

  const { search } = helper.useSearchParams();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value || '';
    setQuery(`?search=${inputValue}`);
    navigate(`?search=${inputValue}`);
  };

  return (
    <form
      data-testid="search"
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
