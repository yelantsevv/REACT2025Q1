import { Component } from 'react';
import type { Props, StateError } from '../../types/types';
import ErrorPage from '../ErrorPage/ErrorPage';

export default class ErrorBoundary extends Component<Props, StateError> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error) {
    console.log(error.message);
    this.setState({ error });
  }

  reset() {
    this.setState({ error: null });
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorPage error={this.state.error} reset={this.reset.bind(this)} />
      );
    }
    return this.props.children;
  }
}
