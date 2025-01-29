import { Component } from 'react';
import { ErrorButton } from './components';

class App extends Component {
  render() {
    return (
      <>
        <div>Header</div>
        <div>Main</div>
        <ErrorButton />
      </>
    );
  }
}

export default App;
