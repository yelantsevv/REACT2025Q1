import { ChangeEvent, Component, FormEvent } from 'react';
import type { State } from '../../types/types';
import styles from './Search.module.css';

export default class Search extends Component<State> {
  state = { inputValue: '' };
  placeholder = localStorage.getItem('search') || 'Search...';

  handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({ inputValue: e.target.value });

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSearch(this.state.inputValue);
    localStorage.setItem('search', this.state.inputValue);
    this.placeholder = 'Search...';
  };
  render() {
    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder={this.placeholder}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    );
  }
}
