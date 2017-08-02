import React, {Component} from 'react';

class UserDetails extends Component {

  constructor(props) {
    super(props);
    // console.log({props});
  }

  render() {
    let user = {};
    for(let i=0; i<this.props.users.length; i++) {
      if(this.props.users[i].id === Number(this.props.match.params.id)) {
        user = this.props.users[i];
        break;
      }
    }
    console.log(user);

    return (
      <div>
        <h4>This is the User Details</h4>
        <h3>{this.props.match.params.id}</h3>
        <h4>{user.fullname}</h4>
      </div>
    )
  }
}

export default UserDetails;
