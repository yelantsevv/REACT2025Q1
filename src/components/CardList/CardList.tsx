import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';
import type { State } from '../../types/types';
import styles from './CardList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Selected from '../Selected/Selected';

export default function CardList({ isLoading, results }: State) {
  const { choice } = useSelector((state: RootState) => state.choice);
  if (isLoading) {
    return (
      <div className={styles.cardList}>
        <Spinner />
        {choice.length > 0 && <Selected />}
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      {results?.length === 0 && <p>No results</p>}
      {results?.map((item, index) => <Card key={index} {...item} />)}
      {choice.length > 0 && <Selected />}
    </div>
  );
}
