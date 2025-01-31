import styles from './Paginator.module.css';
import { State } from '../../types/types';
export default function Paginator(props: State) {
  const helperLink = (e: 'previous' | 'next') => {
    const link = props[e] ?? '';
    props.pageLink(link);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={!props.previous}
        onClick={() => helperLink('previous')}
      >
        prev
      </button>
      <button
        className={styles.button}
        disabled={!props.next}
        onClick={() => helperLink('next')}
      >
        next
      </button>
    </div>
  );
}
