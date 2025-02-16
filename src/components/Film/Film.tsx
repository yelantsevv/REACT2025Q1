import { Films } from '../../types/types';
import styles from './Film.module.css';

export default function Film({ film }: { film: Films }) {
  return (
    <div className={styles.title}>
      <h2>{film?.title}</h2>
      <p>
        <b>Director</b>: {film?.director}
      </p>
      <p>
        <b>Producer</b>: {film?.producer}
      </p>
      <p>
        <b>release</b>: {film?.release_date}
      </p>
      <p>
        <b>characters</b>: {film?.characters?.length}
      </p>
      <p>
        <b>planets</b>: {film?.opening_crawl}
      </p>
    </div>
  );
}
