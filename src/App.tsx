import { Component } from 'react';
import { CardList, ErrorButton, Header } from './components';
import { getPeople, searchPeople } from './api';
import { State } from './types/types';

export default class App extends Component {
  state: State = {
    isLoading: true,
    onSearch: async (e) => {
      this.setState({ isLoading: true });
      this.setState(await searchPeople(e));
      this.setState({ isLoading: false, page: 1 });
    },
    pageLink: async (page) => {
      this.setState({ isLoading: true });
      this.setState(await getPeople(page));
      this.setState({ isLoading: false });
    },
  };

  async componentDidMount() {
    this.setState(await getPeople());
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <>
        <Header {...this.state} />
        <CardList {...this.state} />
        <ErrorButton />
      </>
    );
  }
}
