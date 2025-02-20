import styles from './CardList.module.css';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Spinner, Card } from '..';
import { useGetPeopleListQuery } from '../../store/Redux/api';
import { helper } from '../../helpers';

export default function CardList() {
  const { isFetching, data, error } = useGetPeopleListQuery(helper.query());

  if (isFetching) {
    return (
      <div className={styles.cardList}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div data-testid="error" className={styles.cardList}>
        {(error as FetchBaseQueryError).status === 404 && (
          <p>Ops, something went wrong</p>
        )}
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      {data?.results?.length === 0 && <p>No results</p>}
      {data?.results.map((item, index) => <Card key={index} {...item} />)}
    </div>
  );
}
