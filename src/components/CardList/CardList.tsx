import { useState } from 'react';
import { Card, Spinner } from '..';
import type { State } from '../../types/types';
import styles from './CardList.module.css';
export default function CardList(props: State) {
  const [state] = useState(new Map());
  return (
    <div className={styles.cardList}>
      {props.isLoading && <Spinner />}
      {props.results?.length === 0 && <p>No results</p>}
      {!props.isLoading &&
        props.results?.map((item) => (
          <Card key={item.name} {...item} state={state} />
        ))}
    </div>
  );
}
