import React, {Component} from 'react';
import EditUser from './EditUser';

class ListUsers extends Component {
  constructor() {
    super();
    this.showEditable = this.showEditable.bind(this);
  }

  showEditable(id) {
    // Toggle the edit options for a User to be visible or not
    document.getElementById(id).classList.toggle('u-display--none');
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h4 className="u-inline-block">
              {this.props.user.fullname}: {this.props.user.age}
            </h4>
          </div>
          <div className="col-md-6">
            <button className="btn btn-default u-inline-block mr-2" onClick={() => this.showEditable(this.props.user.id)}>Edit User</button>
            <button className="btn btn-danger u-inline-block" onClick={() => this.props.removeUser(this.props.user)}>Delete User</button>
          </div>
        </div>
        <div id={this.props.user.id} className="row u-display--none">
          <EditUser user={this.props.user} updateUser={this.props.updateUser} />
        </div>
      </div>
    )
  }
}

export default ListUsers;
