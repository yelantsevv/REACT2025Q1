import { Component } from 'react';
import Search from '../Search/Search';
import type { State } from '../../types/types';
import styles from './Header.module.css';

export default class Header extends Component<State> {
  helperLink = (e: 'previous' | 'next') => {
    const link = this.props[e] ?? '';
    this.props.pageLink(link);
  };
  render() {
    return (
      <div className={styles.header}>
        <Search {...this.props} />
        <div className={styles.pagination}>
          <button
            className={styles.button}
            disabled={!this.props.previous}
            onClick={() => this.helperLink('previous')}
          >
            prev
          </button>
          <button
            className={styles.button}
            disabled={!this.props.next}
            onClick={() => this.helperLink('next')}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}
