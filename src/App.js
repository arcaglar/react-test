import React, {Component} from 'react';
import {Table} from './components'
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table data={data}/>
      </div>
    );
  }
}

export default App;