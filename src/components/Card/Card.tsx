import { URL } from '../../api';
import { helper } from '../../helpers';
import type { Results } from '../../types/types';
import styles from './Card.module.css';
import { NavLink } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

import { add, del } from '../../store/features/choiceSlice';

export default function Card(props: Results) {
  const { choice } = useSelector((state: RootState) => state.choice);
  const dispatch = useDispatch();

  const query = helper.query();

  const onChanged = (e: boolean) => {
    dispatch(e ? add(props) : del(props.name));
  };
  const checked = choice.some((card) => card.name === props.name);
  return (
    <NavLink
      to={props.url.replace(URL, '').slice(0, -1) + query}
      className={styles.card}
    >
      <b data-testid="name">{props.name}</b>
      <p>gender: {props.gender}</p>
      <p>height: {props.height}</p>
      <p>mass: {props.mass}</p>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChanged(e.target.checked)}
        onClick={(e) => e.stopPropagation()}
      />
    </NavLink>
  );
}
