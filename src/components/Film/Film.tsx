import styles from './Film.module.css';
import clsx from 'clsx';
import { useGetFilmQuery } from '../../store/Redux/api';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export default function Film({ film }: { film: string }) {
  const { data, isLoading, error } = useGetFilmQuery(film);

  if (isLoading) {
    return (
      <div
        data-testid="loading-film"
        className={clsx(styles.title, styles.loading)}
      ></div>
    );
  }

  if (error) {
    return (
      <div data-testid="loading-film" className={styles.title}>
        <p className={styles.ups}>{(error as FetchBaseQueryError).status}</p>
        <p className={styles.ups}>Ops something went wrong</p>
      </div>
    );
  }

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
