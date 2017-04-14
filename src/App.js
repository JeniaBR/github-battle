import React, {Component} from 'react';
import ReactRouter, {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Popular from './components/Popular';
import Main from './components/Main';
import Home from './components/Home';
import PromptContainer from './containers/PromptContainer';
import './styles/index.css'

class App extends Component {
  render(){
    return(
      <BrowserRouter> 
        <div className='container'>
          <Nav/>
          <Route exact path='/' component={Home}/>
          <Route path='/popular' component={Popular} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;