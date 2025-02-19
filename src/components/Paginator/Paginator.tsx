'use client';
import styles from './Paginator.module.css';
import { URL } from '../../lib/api';
import { Person } from '../../types/types';
import { CustomLink } from '..';

export default function Paginator({
  count,
  previous,
  next,
  search,
}: Person & { search: string }) {
  const number = Math.ceil((count || 0) / 10);
  const arrList = new Array(number).fill(0).map((_, i) => i + 1);
  return (
    <div className={styles.pagination} data-testid="paginator">
      <CustomLink query={previous?.replace(URL, '') || ''} item={'prev'} />
      {arrList.map((item) => (
        <CustomLink
          key={item}
          query={`?search=${search}&page=${item}`}
          item={item}
        />
      ))}
      <CustomLink query={next?.replace(URL, '') || ''} item={'next'} />
    </div>
  );
}
