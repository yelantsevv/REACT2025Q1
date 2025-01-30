import { Component } from 'react';
import { getData } from '../../api';
import type { Films, FilmType } from '../../types/types';
import styles from './Film.module.css';

export default class Film extends Component<FilmType> {
  state: { filmData: Films | undefined } = { filmData: undefined };

  async getFilm() {
    if (this.props.state.has(this.props.film)) {
      this.setState({ filmData: this.props.state.get(this.props.film) });
    } else {
      const rez = await getData<Films>(this.props.film);
      this.props.state.set(this.props.film, rez);
      this.setState({ filmData: rez });
    }
  }

  componentDidMount() {
    this.getFilm();
  }

  render() {
    const { filmData } = this.state;
    return (
      <li
        className={filmData?.title ? '' : styles.loading}
        title={filmData?.opening_crawl}
      >
        {filmData?.title}
      </li>
    );
  }
}
