import React, {Component} from 'react';

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

  render(){
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;

    return(
      <div>
        <div className="row">
          {!playerOneName && <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit}/>}
          {!playerTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit}/>}
        </div>
      </div>
    );
  }
}

export default Battle;