import React, {Component} from 'react';

class EditUser extends Component {
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
      <div className="row">
        <div className="col-md-12">
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
            <input type="submit" onClick={() => this.props.updateUser(this.props.user)} value="Confirm Edit" className="btn btn-success" />
          </form>
          <hr/>
        </div>
      </div>
    )
  }
}

export default EditUser;
