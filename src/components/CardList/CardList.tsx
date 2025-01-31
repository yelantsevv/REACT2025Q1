import { Card, Spinner } from '..';
import type { State } from '../../types/types';
import styles from './CardList.module.css';

export default function CardList({ isLoading, results }: State) {
  if (isLoading) {
    return (
      <div className={styles.cardList}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      {results?.length === 0 && <p>No results</p>}
      {results?.map((item) => <Card key={item.name} {...item} />)}
    </div>
  );
}
