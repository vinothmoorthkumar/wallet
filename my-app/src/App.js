import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Lists from './components/list';
import addEdit from './components/add-edit';
class App extends Component {
  render() {
    return (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Wallet Tracker
                </Typography>
          </Toolbar>
        </AppBar>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header> */}
          {/* <div className="menu">
              <ul>
                <li> <Link to="/">List</Link> </li>
                <li> <Link to="/add_edit">addoredit</Link> </li>
              </ul>
          </div> */}
          <div className="App-intro">
            <Switch>
              <Route exact path="/" component={Lists} />
              <Route exact path="/add_edit" component={addEdit} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;