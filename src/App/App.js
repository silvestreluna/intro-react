import React from 'react';

import goats from './goats';

import './App.scss';


class App extends React.Component {
  // This is where we do axis call to get data.  - Anything that modifies states
  state = {
    goats: [],
  }

  componentDidMount() {
    // this below really should be { goats: goats}
    this.setState({ goats });
  }

  render() {
    // Javascript things


    return (
      <div className="App">
        <div>Goat Yoga</div>
      {/* <GoatCorral goats={goats}/> */}
      </div>
    );
  }
}

export default App;
