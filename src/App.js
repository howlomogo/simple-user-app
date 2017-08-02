import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import UserDetails from './pages/UserDetails';
import Header from './components/Header';


import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path='/' component={() =>
              <Home />
            }/>
            <Route path='/list' component={() =>
              <List />
            }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
