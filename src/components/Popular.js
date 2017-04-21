import React, {Component} from 'react';
import Loading from './Loading';
import * as api from '../utils/api';

const SelectLanguage = (props) => {
  let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return(
    <ul className='languages'>
      {languages.map((language)=>{
        return (
          <li 
          style={language === props.selectedLanguage ? {color: '#d0021b'} : null}
          onClick={props.onSelect.bind(null,language)} 
          key={language}>
          {language}
          </li>
        );
      })}
    </ul>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: React.PropTypes.string.isRequired,
  onSelect: React.PropTypes.func.isRequired
}

const RepoGrid = (props) => {
  return(
    <ul className="popular-list">
      {props.repos.map((repo, index)=>{
        return(
          <li key={repo.name} className="popular-item">
          <div className="popular-rank">#{index + 1}</div>
          <img className="avatar" src={repo.owner.avatar_url} alt={`Avatar for ${repo.owner.login}`}/>
          <ul className="space-list-items">
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
        </li>
        );
      })}
    </ul>
  );
}

RepoGrid.propTypes = {
  repos: React.PropTypes.array.isRequired
}

class Popular extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
  }

  componentDidMount(){
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = (lang) => {
    this.setState({
      selectedLanguage: lang,
      repos: null
    });

    api.fetchPopularRepos(lang)
      .then((repos)=>{
        this.setState({
          repos: repos
        });
      });
  }

  render(){
    return(
      <div>
        <SelectLanguage 
        selectedLanguage={this.state.selectedLanguage} 
        onSelect={this.updateLanguage}/>
        {!this.state.repos ? <Loading/> : <RepoGrid repos={this.state.repos}/>}
      </div>
    );
  }
}

export default Popular;