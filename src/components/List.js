import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          name: 'John Cena',
          age: 30
        },
        {
          id: 2,
          name: 'Hulk Hogan',
          age: 80
        },
        {
          id: 3,
          name: 'Steve Austin',
          age: 40
        }
      ]
    };
  }

  addUser() {

  }

  removeUser(user) {
    let users = this.state.users;
    let index = users.indexOf(user);
    users.splice(index, 1);

    this.setState ({
      users: users
    }, () => {
      console.log('User Removed: ' + this.state.users.length + ' Users remain...');
    })
  }

  render() {
    // Array.prototype.map() takes a second argument to set what this refers to
    // in the mapping function, so pass this as the second argument to preserve the current context:
    let users = this.state.users.map(function(user) {
      return (
        <div>
          
          <ListItem key={user.id} user={user} removeUser={this.removeUser.bind(this)} />
        </div>
      );
    }, this)

    return (
      <div>
        {users}
      </div>
    )
  }
}


export default List;
