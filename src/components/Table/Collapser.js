import React, {Component} from 'react';
import {Thead, Tbody} from '../../components'
import './table.scss'

class Collapser extends Component {
  constructor(props) {
    super();
  }

  close() {
    this.props.closeCollapser()
  }

  removeItem = (item) => {
    this.props.removeItem(item)
  }

  render() {
    const data = this.props.data
    return (
        <div className="collapser">
          <div className="collapser__close" onClick={this.close.bind(this)}>x</div>
          <table className="table">
            <Thead/>
            <Tbody data={data} removeItem={this.removeItem}/>
          </table>
        </div>
    );
  }
}

export default Collapser;