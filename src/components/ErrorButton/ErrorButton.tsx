import { Component } from 'react';
import styles from './ErrorButton.module.css';

export default class ErrorButton extends Component {
  state = {
    hasError: false,
    error: null,
  };

  throwError = () =>
    this.setState({
      hasError: true,
      error: 'Triggered Error',
    });

  render() {
    if (this.state.hasError) {
      throw new Error(`Error Boundary: ${this.state.error}`);
    }

    return (
      <button className={styles.error} onClick={() => this.throwError()}>
        Error Button
      </button>
    );
  }
}
