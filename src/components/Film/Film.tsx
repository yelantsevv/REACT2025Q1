import { Component } from 'react';
import { getData } from '../../api';
import type { Films, FilmType } from '../../types/types';
import styles from './Film.module.css';

export default class Film extends Component<FilmType> {
  async getFilm() {
    if (this.props.state.has(this.props.film)) {
      return this.props.state.get(this.props.film);
    } else {
      const rez = await getData<Films>(this.props.film);
      this.props.state.set(this.props.film, rez);
    }
  }

  componentDidMount() {
    this.getFilm();
  }

  render() {
    const film = this.props.state.get(this.props.film);
    return (
      <>
        <li
          className={film?.title ? '' : styles.loading}
          title={film?.opening_crawl}
        >
          {film?.title}
        </li>
      </>
    );
  }
}
