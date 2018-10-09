import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import History from './components/History'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
              <div>
                <NavLink exact to="/"> Home </NavLink>
                <NavLink to="/notre-histoire" activeClassName="selected"> History </NavLink>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
