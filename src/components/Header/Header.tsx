import { Component } from 'react';
import Search from '../Search/Search';
import type { State } from '../../types/types';
import styles from './Header.module.css';
import Paginator from '../Paginator/Paginator';

export default class Header extends Component<State> {
  render() {
    return (
      <div className={styles.header}>
        <Search {...this.props} />
        <Paginator {...this.props} />
      </div>
    );
  }
}
