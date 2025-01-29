import { Component } from 'react';
import type { Props, State } from '../../types/types';
import styles from './ErrorBoundary.module.css';

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error: Error) {
    console.log(error.message);
    this.setState({
      hasError: true,
      error,
    });
  }

  reset() {
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.error}>
          <h2>{this.state.error?.message}</h2>
          <button className={styles.reset} onClick={() => this.reset()}>
            Reset
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
