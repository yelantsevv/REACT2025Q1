import { Component } from 'react';
import { getData } from '../../api';
import type { Films, FilmType } from '../../types/types';
import styles from './Film.module.css';

export default class Film extends Component<FilmType> {
  state: { filmData: Films | undefined } = { filmData: undefined };

  async getFilm(link: string) {
    if (this.props.state.has(link)) {
      if (this.props.state.get(link) === 'loading') {
        setTimeout(() => this.getFilm(link), 300);
        return;
      }
      this.setState({ filmData: this.props.state.get(link) });
    } else {
      this.props.state.set(link, 'loading');
      const rez = await getData<Films>(link);
      this.props.state.set(link, rez);
      this.setState({ filmData: rez });
    }
  }

  componentDidMount() {
    this.getFilm(this.props.film);
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
