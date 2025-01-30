import { ChangeEvent, Component, FormEvent } from 'react';
import type { State } from '../../types/types';

export default class Search extends Component<State> {
  state = { inputValue: '' };

  handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({ inputValue: e.target.value });

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSearch(this.state.inputValue);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
