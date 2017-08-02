import React, { Component } from 'react';
import ListUsers from './../components/ListUsers';
import NewUser from './../components/NewUser';
import { BrowserRouter, Route } from 'react-router-dom';
import UserDetails from './UserDetails';


class List extends Component {

  constructor() {
    super();
    this.state = {
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

  // Add A New User
  addUser(fullname, age) {
    // Slice into new array and amend this array
    let users = this.state.users.slice();

    // Just generate a random ID as the number for now
    let id = Math.floor((Math.random() * 100) +7);

    let user = {
      id: id,
      fullname: fullname,
      age: Number(age)
    }

    users.push(user);

    // Update state
    this.setState ({
      users: users
    })
  }

  // Update A User
  updateUser(id, fullname, age) {
    let users = this.state.users.slice();
    // Update the edited users details with no mutation to the state
    for(let i=0; i<users.length; i++) {
      if(users[i].id === id) {
        let updatedUser = Object.assign({}, users[i], {fullname: fullname, age: age})
        users[i] = updatedUser;
        break;
      }
    }

    // Update the user State
    this.setState ({
      users: users
    });
  }

  // Remove A User
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
        <ListUsers key={user.id} user={user} updateUser={this.updateUser.bind(this)} removeUser={this.removeUser.bind(this)} />
      );
    }, this)

    return (
      <div>
        <h2>Users</h2>
        <hr/>
        <NewUser addUser={this.addUser.bind(this)} />
        {users}
        
        <Route path='/list/:id' component={(props) => (
          <UserDetails {...props} users={this.state.users}/>
        )} />
      </div>
    )
  }
}


export default List;
