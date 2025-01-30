import { Component } from 'react';
import type { Results } from '../../types/types';
export default class Card extends Component<Results> {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
