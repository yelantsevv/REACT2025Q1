import { Component } from 'react';
import { Card, Spinner } from '..';
import type { State } from '../../types/types';
export default class CardList extends Component<State> {
  render() {
    return (
      <div>
        {this.props.isLoading && <Spinner />}
        {this.props.results?.length === 0 && <p>No results</p>}
        {!this.props.isLoading &&
          this.props.results?.map((item) => <Card key={item.name} {...item} />)}
      </div>
    );
  }
}
