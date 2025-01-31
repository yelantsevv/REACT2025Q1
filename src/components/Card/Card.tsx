import type { CardType } from '../../types/types';
import styles from './Card.module.css';
import { Film } from '..';

export default function Card(props: CardType) {
  return (
    <div className={styles.card}>
      <b>{props.name}</b>
      <p>gender: {props.gender}</p>
      <p>height: {props.height}</p>
      <p>mass: {props.mass}</p>
      <ul className={styles.films}>
        <b>Films:</b>
        {props.films.map((film) => (
          <Film key={film} film={film} state={props.state} />
        ))}
      </ul>
    </div>
  );
}
