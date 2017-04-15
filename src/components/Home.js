import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import octacat from '../img/linktocat.png';

class Home extends Component {
    render(){
        return(
            <div className="home-container">
                <h1>Github Battle</h1>
                <p className="lead">Some fancy motto</p>
                <Link className='button' to='/battle'>
                  Battle
                </Link>
                <img className="imageCenter" src={octacat} alt="Octa Cat"/>
            </div>
        );
    }
}

export default Home;