import { Component } from 'react';
import styles from './Spinner.module.css';

export default class Spinner extends Component {
  public render() {
    return <div className={styles.spinner} />;
  }
}
