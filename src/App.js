import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Popular from './components/Popular';
import Main from './components/Main';
import Home from './components/Home';
import PromptContainer from './containers/PromptContainer';
import './styles/index.css'

class App extends Component {
  render(){
    return(
      <div className='container'>
        <Popular/>
      </div>
    )
  }
}

export default App;