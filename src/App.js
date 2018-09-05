import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    const helloWorld = {firstname:"Roger", lastname:"terrill"};
    return (
      <div className="App">
        <h1>{helloWorld.firstname} and {helloWorld.lastname}</h1>
      </div>
    );
  }
}

export default App;
