import { Component } from 'react';
import Search from '../Search/Search';
import type { State } from '../../types/types';

export default class Header extends Component<State> {
  helperLink = (e: 'previous' | 'next') => {
    const link = this.props[e] ?? '';
    this.props.pageLink(link);
  };
  render() {
    return (
      <>
        <Search {...this.props} />
        <button
          disabled={!this.props.previous}
          onClick={() => this.helperLink('previous')}
        >
          prev
        </button>
        <button
          disabled={!this.props.next}
          onClick={() => this.helperLink('next')}
        >
          next
        </button>
      </>
    );
  }
}
