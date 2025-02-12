import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';
import styles from './CardList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Selected from '../Selected/Selected';
import { api } from '../../store/Redux/api';
import { helper } from '../../helpers';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export default function CardList() {
  const { choice } = useSelector((state: RootState) => state.choice);

  const { isFetching, data, error } = api.useGetPeopleListQuery(helper.query());

  if (isFetching) {
    return (
      <div className={styles.cardList}>
        <Spinner />
        {choice.length > 0 && <Selected />}
      </div>
    );
  }

  if (error) {
    return (
      <div data-testid="error" className={styles.cardList}>
        {(error as FetchBaseQueryError).status === 404 && (
          <p>Ops, something went wrong</p>
        )}
        {choice.length > 0 && <Selected />}
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      {data?.results?.length === 0 && <p>No results</p>}
      {data?.results.map((item, index) => <Card key={index} {...item} />)}
      {choice.length > 0 && <Selected />}
    </div>
  );
}
