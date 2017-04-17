import React, {Component} from 'react';
import ReactRouter, {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Popular from './components/Popular';
import Battle from './components/Battle';
import Home from './components/Home';
import Results from './components/Results';
import './styles/index.css'

class App extends Component {
  render(){
    return(
      <BrowserRouter> 
        <div className='container'>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/battle' component={Battle}/>
            <Route path='/battle/results' component={Results}/>
            <Route path='/popular' component={Popular}/>
            <Route render={()=>{return(<p>Page Not Found!</p>);}}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;