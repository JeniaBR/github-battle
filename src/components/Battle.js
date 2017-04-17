import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const PlayerPreview = (props) => {
  return(
    <div>
      <div className="column">
        <img src={props.avatar} alt={`Avatar for ${props.username}`} className="avatar"/>
        <h2 className="username">@{props.username}</h2>
      </div>
      <button className="reset" onClick={props.onReset.bind(null, props.id)}>Reset</button>
    </div>
  );
}

PlayerPreview.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  onReset: React.PropTypes.func.isRequired
}

class PlayerInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ""
    }
  }

  handleChange = (event) => {
    let value = event.target.value;
    this.setState({
      username: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
  }

  render(){
    return(
      <form className="column" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="header" >
          {this.props.label}
        </label>
        <input
        id='username'
        placeholder='Github Username' 
        type="text"
        autoComplete='off'
        value={this.state.username}
        onChange={this.handleChange}/>
        <button className="button" type='submit' disabled={!this.state.username}>
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired
}

class Battle extends Component {
  constructor(props){
    super(props);

    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    }
  }

  handleSubmit = (id, username) => {
    this.setState(()=>{
      let newState = {};
      newState[`${id}Name`] = username;
      newState[`${id}Image`] = `https://github.com/${username}.png?size=200`;
      return newState;
    });
  }

  handleReset = (id) => {
    this.setState(()=>{
      let newState = {};
      newState[`${id}Name`] = "";
      newState[`${id}Image`] = null;
      return newState;
    });
  }

  render(){
    let match = this.props.match;
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;
    let playerOneImage = this.state.playerOneImage;
    let playerTwoImage = this.state.playerTwoImage;

    return(
      <div>
        <div className="row">
          {!playerOneName && <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit}/>}
          {playerOneImage !== null && <PlayerPreview id='playerOne' avatar={playerOneImage} username={playerOneName} onReset={this.handleReset}/>}
          {!playerTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit}/>}
          {playerTwoImage !== null && <PlayerPreview id='playerTwo' avatar={playerTwoImage} username={playerTwoName} onReset={this.handleReset}/>}
        </div>
        {playerOneImage && playerTwoImage && 
        <Link className="button" to={{pathname:`${match.url}/results`,
                                      search:`?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`}}>
        Battle</Link>}
      </div>
    );
  }
}

export default Battle;