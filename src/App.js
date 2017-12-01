import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import GamesPage from './GamesPage';

class App extends Component {
  render() {
    return (
      <div className="ui container">
          <div className="ui three item menu">
            <NavLink className="item" activeClassName="active" exact to="/" >Home</NavLink>
            <NavLink className="item" activeClassName="active" exact to="/games" >Games</NavLink>
            <NavLink className="item" activeClassName="active" exact to="/games/new" >Add New Game</NavLink>
          </div>
          {this.props.children}
      </div>
    );
  }
}

export default App;
