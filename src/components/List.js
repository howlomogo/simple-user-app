import React, { Component } from 'react';
import ListUsers from './ListUsers';
import NewUser from './NewUser';

class List extends Component {

  constructor() {
    super();
    this.state = {
      cheese: 'cheese',
      users: [
        {
          id: 1,
          fullname: 'John Cena',
          age: 30
        },
        {
          id: 2,
          fullname: 'Hulk Hogan',
          age: 80
        },
        {
          id: 3,
          fullname: 'Steve Austin',
          age: 40
        }
      ]
    };
  }

  addUser(fullname, age) {
    let users = this.state.users;

    // Just generate a random ID as the number for now
    let id = Math.floor((Math.random() * 100) +7);

    let user = {
      id: id,
      fullname: fullname,
      age: Number(age)
    }

    users.push(user);
    console.log(users);

    // State should not be, being updated here!!!
    // Look at this
    console.log(this.state.users);

    // Update state
    this.setState ({
      users: users
    })
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
        <ListUsers key={user.id} user={user} removeUser={this.removeUser.bind(this)} />
      );
    }, this)

    return (
      <div className="container">
        <h2>Users</h2>
        <hr/>
        <NewUser addUser={this.addUser.bind(this)} />
        {users}
      </div>
    )
  }
}


export default List;
