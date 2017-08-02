import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/list'>List</Link></li>
      </ul>
    )
  }
}

export default Header;
