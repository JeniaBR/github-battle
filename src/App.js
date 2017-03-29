import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/Home';
import PromptContainer from './containers/PromptContainer';

let App = () => {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home}/>
          <Route path='playerOne' component={PromptContainer}/>
        </Route>
      </Router>
    );
  
}

export default App;