import React, {Component} from 'react';
import {Collapser} from '../../components'
import './table.scss'

class Tbody extends Component {

  state = {
    index: null
  };

  handleClick = (item) => {
    this.setState({
      index: item
    })
  }

  remove = (item) => {
    this.props.removeItem(item)
  }

  render() {
    const data = this.props.data
    return (
      <tbody>
          {data.map((row, key) =>
            <tr className="table__line" key={row.ID}>
              <td>{row.ID}</td>
              <td>{row.Name}</td>
              <td>{row.City}</td>
              <td>{row.Phone}</td>
              <td>
                {
                  row.child.length > 0 ?
                  (
                    <button className="button" onClick={this.handleClick.bind(this, key)}>Open</button>
                  )
                  :
                  null
                }
              </td>
              <td className="last-item">
                <button className="button" onClick={this.remove.bind(this, row.ID)}>Delete</button>
              </td>
              {
                key === this.state.index ?
                (
                  <Collapser key={key} data={row.child} closeCollapser={this.handleClick} removeItem={this.remove}></Collapser>
                )
                :
                null
              }
            </tr>
          )}
      </tbody>
    );
  }
}

export default Tbody;