import React, {Component} from 'react';
import {Thead, Tbody} from '../../components'
import './table.scss'

class Table extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: this.playingData(this.props.data)
    }
  }

  playingData (props) {
    let data = props
    let parent = []
    let child = []

    for (let i = 0; i < data.length; i++) {
      if (!data[i].hasOwnProperty('parentID')) {
        parent.push(data[i])
      } else {
        child.push(data[i])
      }
    }

    for (let y = 0; y < data.length; y++) {
      data[y].child = []
      for (let j = 0; j < child.length; j++) {
        if (child[j].parentID === data[y].ID) {
          data[y].child.push(child[j])
        }
      }
    }

    return parent
  }

  removeItem = (item) => {
    let data = this.state.items
    for (let i = 0; i < data.length; i++) {
      if (data[i].ID === item) {
        console.log(data[i])
        data.splice(i, 1)
      }
    }
    this.setState({
      items: data
    })
  }
  
  render() {
    return (
      <div>
        <table className="table">
          <Thead/>
          <Tbody data={this.state.items} removeItem={this.removeItem}/>
        </table>
      </div>
    );
  }
}

export default Table;