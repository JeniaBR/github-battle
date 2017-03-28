import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/Home';
import './App.css';

let App = () => {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Main}/>
        <Route path='home' component={Home}/>
      </Router>
    );
  
}

export default App;
