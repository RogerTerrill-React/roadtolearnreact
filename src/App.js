import React, { Component } from 'react';
import './App.css';
//import Table from './Table';
//import Search from './Search';

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

// function isSearched(searchTerm) {
//   return function (item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

const isSearched = searchTerm => item => 
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

const Search = ({value, onChange, children}) =>
  <form>
    {children} 
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>

const Button = ({onClick, className, children}) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

const Table = ({list_c, pattern, onDismiss}) =>
  <div>
    {list_c.filter(isSearched(pattern)).map(item =>
    <div key={item.objectID}>
        <span>
            <a href={item.url} > {item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
            <Button onClick={()=>onDismiss(item.objectID)}>
                Dismiss
            </Button>
        </span>
    </div>
    )}
</div>


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list_b: list_a,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);

  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list_b.filter(isNotId);
    this.setState({list_b: updatedList});
  }

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {

    const { list_b, searchTerm } = this.state;
    
    return (
      <div className="App">
        <Search 
          value={searchTerm} 
          onChange={this.onSearchChange} 
        >
          Search
        </Search>
        <Table 
          list_c={list_b} 
          pattern={searchTerm} 
          onDismiss={this.onDismiss} 
        />
      </div>
    );
  }
}

export default App;
