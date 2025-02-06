import { URL } from '../../api';
import { helper } from '../../helpers';
import type { Results } from '../../types/types';
import styles from './Card.module.css';
import { NavLink } from 'react-router';

export default function Card({ name, url, gender, height, mass }: Results) {
  const query = helper.query();
  return (
    <NavLink
      to={url.replace(URL, '').slice(0, -1) + query}
      className={styles.card}
    >
      <b data-testid="name">{name}</b>
      <p>gender: {gender}</p>
      <p>height: {height}</p>
      <p>mass: {mass}</p>
    </NavLink>
  );
}
