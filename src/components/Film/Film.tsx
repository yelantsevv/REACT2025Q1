import { useEffect, useState } from 'react';
import { getData } from '../../api';
import type { Films } from '../../types/types';
import styles from './Film.module.css';
import clsx from 'clsx';

export default function Film({ film }: { film: string }) {
  const [filmData, setFilmData] = useState<Films>();

  useEffect(() => {
    getData<Films>(film).then(setFilmData);
  }, [film]);

  if (!filmData) {
    return <div className={clsx(styles.title, styles.loading)} />;
  }

  return (
    <div className={styles.title}>
      <h2>{filmData.title}</h2>
      <p>
        <b>Director </b>:{filmData.director}
      </p>
      <p>
        <b>Producer </b>:{filmData.producer}
      </p>
      <p>
        <b>release </b>:{filmData.release_date}
      </p>
      <p>
        <b>characters </b>:{filmData.characters.length}
      </p>
      <p>
        <b>planets </b>:{filmData.opening_crawl}
      </p>
    </div>
  );
}
