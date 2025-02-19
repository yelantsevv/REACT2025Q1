'use client';
import styles from './CardList.module.css';
import { Person } from '../../types/types';
import { Card } from '..';

export default function CardList({ people }: { people: Person }) {
  return (
    <div className={styles.cardList}>
      {people?.results?.length === 0 && <p>No results</p>}
      {people?.results?.map((item, index) => <Card key={index} {...item} />)}
    </div>
  );
}
