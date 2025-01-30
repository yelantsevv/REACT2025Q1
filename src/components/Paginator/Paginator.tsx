import { Component } from 'react';
import styles from './Paginator.module.css';
import { State } from '../../types/types';

export default class Paginator extends Component<State> {
  helperLink = (e: 'previous' | 'next') => {
    const link = this.props[e] ?? '';
    this.props.pageLink(link);
  };
  render() {
    return (
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
    );
  }
}
