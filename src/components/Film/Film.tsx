import styles from './Film.module.css';
import type { Films } from 'src/types/types';

export default function Film({ data }: { data: Films }) {
  return (
    <div className={styles.title}>
      <h2>{data?.title}</h2>
      <p>
        <b>Director</b>: {data?.director}
      </p>
      <p>
        <b>Producer</b>: {data?.producer}
      </p>
      <p>
        <b>release</b>: {data?.release_date}
      </p>
      <p>
        <b>characters</b>: {data?.characters?.length}
      </p>
      <p>
        <b>planets</b>: {data?.opening_crawl}
      </p>
    </div>
  );
}
