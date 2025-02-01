import styles from './Paginator.module.css';
import { State } from '../../types/types';
export default function Paginator({
  count,
  previous,
  next,
  pageLink,
  onSearch,
}: State) {
  const number = Math.ceil((count || 0) / 10);
  const arrList = new Array(number).fill(0).map((_, i) => i + 1);
  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={!previous}
        onClick={() => pageLink(previous ?? '')}
      >
        prev
      </button>
      {arrList.map((item) => (
        <button
          className={styles.button}
          key={item}
          onClick={() => onSearch(localStorage.getItem('search') || '', item)}
        >
          {item}
        </button>
      ))}
      <button
        className={styles.button}
        disabled={!next}
        onClick={() => pageLink(next ?? '')}
      >
        next
      </button>
    </div>
  );
}
