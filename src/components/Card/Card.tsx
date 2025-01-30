import { Component } from 'react';
import type { CardType } from '../../types/types';
import styles from './Card.module.css';
import { Film } from '..';

export default class Card extends Component<CardType> {
  render() {
    return (
      <div className={styles.card}>
        <b>{this.props.name}</b>
        <p>gender: {this.props.gender}</p>
        <p>height: {this.props.height}</p>
        <p>mass: {this.props.mass}</p>
        <ul className={styles.films}>
          <b>Films:</b>
          {this.props.films.map((film) => (
            <Film key={film} film={film} state={this.props.state} />
          ))}
        </ul>
      </div>
    );
  }
}
