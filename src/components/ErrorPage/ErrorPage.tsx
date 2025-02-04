import { ErrorPageType } from '../../types/types';
import styles from './ErrorPage.module.css';

export default function ErrorPage({ error, reset }: ErrorPageType) {
  return (
    <div className={styles.error}>
      <h2>{error?.message}</h2>
      <button className={styles.reset} onClick={() => reset?.()}>
        Reset
      </button>
    </div>
  );
}
