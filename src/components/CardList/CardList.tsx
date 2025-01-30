import { Component } from 'react';
import { Card, Spinner } from '..';
import type { State } from '../../types/types';
import styles from './CardList.module.css';

export default class CardList extends Component<State> {
  state = new Map();
  render() {
    return (
      <div className={styles.cardList}>
        {this.props.isLoading && <Spinner />}
        {this.props.results?.length === 0 && <p>No results</p>}
        {!this.props.isLoading &&
          this.props.results?.map((item) => (
            <Card key={item.name} {...item} state={this.state} />
          ))}
      </div>
    );
  }
}
