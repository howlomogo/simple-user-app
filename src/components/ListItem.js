import React, {Component} from 'react';

class ListItem extends Component {


  render() {
    return (
      <div>
        <h4 onClick={() => this.props.removeUser(this.props.user)}>{this.props.user.name}</h4>
        <h4>{this.props.user.age}</h4>
      </div>
    )
  }
}

export default ListItem;
