import { helper } from '../../helpers';
import type { Results } from '../../types/types';
import styles from './Card.module.css';
import { NavLink } from 'react-router';

export default function Card(props: Results) {
  const query = helper.query();
  return (
    <NavLink to={`/${props.name}${query}`} className={styles.card}>
      <b>{props.name}</b>
      <p>gender: {props.gender}</p>
      <p>height: {props.height}</p>
      <p>mass: {props.mass}</p>
    </NavLink>
  );
}
