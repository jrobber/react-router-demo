import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Link } from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/" className="link">Home</Link>
          <Link to="/page2" className="link">Page 2</Link>
          <Link to="/pageDetails/victory" className="link">Details</Link>
        </div>
        <Switch>
          <Route component={ Page1 } path="/" exact />
          <Route component={ Page2 } path="/page2" />
          <Route component={ Page3 } path="/pageDetails/:id" />
        </Switch>
      </div>
    );
  }
}

export default App;
