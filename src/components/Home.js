import React, {Component} from 'react';
import {Link} from 'react-router';
import octacat from '../img/linktocat.png';
import '../styles/styles.css'

class Home extends Component {
    render(){
        return(
            <div className="jumbotron col-sm-12 text-center">
                <h1>Github Battle</h1>
                <p className="lead">Some fancy motto</p>
                <Link to='/playerOne'>
                    <button type='button' className="btn btn-lg btn-success">Get Started</button>
                </Link>
                <img className="img-responsive imageCenter" src={octacat} alt="Octa Cat"/>
            </div>
        );
    }
}

export default Home;