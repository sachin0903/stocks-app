import * as React from 'react';
import './App.css';
import StocksContainer from './components/custom/StocksContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Stocks App</h1>
        </header>
        <StocksContainer />
      </div>
    );
  }
}

export default App;
