import React from 'react'

class NameItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<li className={this.props.picked?'active list-group-item':'list-group-item'}><span>{this.props.children}</span><button onClick={()=>this.props.remove(this.props.name)}>-</button></li>);
  }
}

export default NameItem