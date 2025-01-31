import { useEffect, useState } from 'react';
import { getData } from '../../api';
import type { Films } from '../../types/types';
import styles from './Film.module.css';

export default function Film({ film }: { film: string }) {
  const [filmData, setFilmData] = useState<Films>();

  useEffect(() => {
    getData<Films>(film).then(setFilmData);
  }, [film]);

  return (
    <li
      className={filmData?.title ? '' : styles.loading}
      title={filmData?.opening_crawl}
    >
      {filmData?.title}
    </li>
  );
}
