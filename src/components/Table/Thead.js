import React, {Component} from 'react';
import './table.scss'

class Thead extends Component {

  render() {
    return (
      <thead>
        <tr className="table__line table__line--unstyle">
          <td>ID</td>
          <td>Name</td>
          <td>City</td>
          <td>Phone</td>
          <td className="last-item">Detail</td>
          <td className="last-item">Delete</td>
        </tr>
      </thead>
    );
  }
}

export default Thead;