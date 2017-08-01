import React, { Component } from 'react';

class NewUser extends Component {

  constructor() {
    super();
    this.state = {
      fullname: '',
      age: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    // Update the input changes
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('e is ' + e.target);

    this.props.addUser(this.state.fullname, this.state.age);
    // Reset the inputs / states
    this.setState({
      fullname: '',
      age: ''
    })
  }

  render() {
    return (
      <div>
        <h4>Create A New User</h4>
        <hr />
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input name="fullname" value={this.state.fullname} onChange={this.handleInputChange} className="form-control" type="text"/>
          </div>
          <div className="form-group">
            <label>Age</label>
            <input name="age" value={this.state.age} onChange={this.handleInputChange} className="form-control" type="text"/>
          </div>
          <input type="submit" value="Add User" className="btn btn-default" />
        </form>
        <hr/>
      </div>
    )
  }
}

export default NewUser;
