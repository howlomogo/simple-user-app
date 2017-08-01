import React, {Component} from 'react';

class ListUsers extends Component {


  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h4 className="u-inline-block" onClick={() => this.props.removeUser(this.props.user)}>
            {this.props.user.fullname}: {this.props.user.age}
          </h4>
        </div>
        <div className="col-md-6">
          <button className="btn btn-danger u-inline-block" onClick={() => this.props.removeUser(this.props.user)}> Delete User</button>
        </div>
      </div>
    )
  }
}

export default ListUsers;
