import Link from 'next/link';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <p>Sorry, the page is Not Found</p>
      <Link href="/" className={styles.button}>
        GO HOME
      </Link>
    </div>
  );
}
