import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/Home';

let App = () => {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    );
  
}

export default App;
