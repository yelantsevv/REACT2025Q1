import { Spinner } from '../components';
import styles from './App.module.css';

export default function Loading() {
  return (
    <div className={styles.containerLoading}>
      <Spinner />
    </div>
  );
}
