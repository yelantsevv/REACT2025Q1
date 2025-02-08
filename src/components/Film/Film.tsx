import { useEffect, useState } from 'react';
import { getData } from '../../api';
import type { Films } from '../../types/types';
import styles from './Film.module.css';
import clsx from 'clsx';

enum ETextError {
  TextError = 'Ops something went wrong',
}
export default function Film({ film }: { film: string }) {
  const [filmData, setFilmData] = useState<Films>();

  useEffect(() => {
    getData<Films>(film)
      .then(setFilmData)
      .catch(() => {
        setFilmData({
          title: ETextError.TextError,
        } as Films);
      });
  }, [film]);

  if (!filmData || filmData?.title == ETextError.TextError) {
    return (
      <div
        data-testid="loading-film"
        className={clsx(
          styles.title,
          filmData?.title != ETextError.TextError && styles.loading
        )}
      >
        <p className={styles.ups}>{filmData?.title}</p>
      </div>
    );
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
        <b>characters </b>:{filmData?.characters?.length}
      </p>
      <p>
        <b>planets </b>:{filmData.opening_crawl}
      </p>
    </div>
  );
}
