import React, { Component } from 'react';
import './App.css';

const list_a = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5, 
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list_b: list_a,
    };

    this.onDismiss = this.onDismiss.bind(this);

  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list_b.filter(isNotId);
    this.setState({list_b: updatedList});
  }

  render() {
    const { list_b } = this.state;
    return (
      <div className="App">
        {list_b.map(item => { 
          const onHandleDismiss = () => this.onDismiss(item.objectID);
          return (
            <div key={item.objectID}>
            <span>
              <a href={item.url} > {item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button onClick={() => console.log(item.objectID)} type="button">
                Dismiss
              </button>
            </span>
          </div>
          );
        }
        )}
      </div>
    );
  }
}

export default App;
