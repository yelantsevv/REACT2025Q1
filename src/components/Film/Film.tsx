import { useEffect, useState } from 'react';
import { getData } from '../../api';
import type { Films, FilmType } from '../../types/types';
import styles from './Film.module.css';

export default function Film({ film, state }: FilmType) {
  const [filmData, setFilmData] = useState<Films>();

  useEffect(() => {
    const getFilm = async (link: string) => {
      if (state.has(link)) {
        if (state.get(link) === 'loading') {
          setTimeout(() => getFilm(link), 300);
          return;
        }
        setFilmData(state.get(link) as Films);
      } else {
        state.set(link, 'loading');
        const rez = await getData<Films>(link);
        state.set(link, rez);
        setFilmData(rez);
      }
    };

    getFilm(film);
  }, [film, state]);

  return (
    <li
      className={filmData?.title ? '' : styles.loading}
      title={filmData?.opening_crawl}
    >
      {filmData?.title}
    </li>
  );
}
