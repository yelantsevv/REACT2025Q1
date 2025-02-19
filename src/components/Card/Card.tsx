'use client';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Card.module.css';
import type { Results } from '../../types/types';
import type { RootState } from '../../store/store';
import { add, del } from '../../store/features/choiceSlice';
import Link from 'next/link';
import { URL } from '../../lib/api';
import { useSearchParams } from 'next/navigation';

export default function Card(props: Results) {
  const { choice } = useSelector((state: RootState) => state.choice);

  const page = useSearchParams().get('page');
  const search = useSearchParams().get('search');

  const dispatch = useDispatch();
  const onChanged = (e: boolean) => {
    dispatch(e ? add(props) : del(props.name));
  };

  const checked = choice.some((card) => card.name === props.name);
  return (
    <Link
      href={{
        pathname: props.url.replace(URL, ''),
        query: { search, page },
      }}
      className={styles.card}
    >
      <b data-testid="name">{props.name}</b>
      <p>gender: {props.gender}</p>
      <p>height: {props.height}</p>
      <p>mass: {props.mass}</p>
      <input
        data-testid="checkbox"
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChanged(e.target.checked)}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onChanged(!checked.valueOf());
          }
        }}
      />
    </Link>
  );
}
