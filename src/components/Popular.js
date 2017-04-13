import React, {Component} from 'react';

const SelectLanguage = (props) => {
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return(
        <ul className='languages'>
            {languages.map((language)=>{
                return (
                    <li 
                    style={language=== props.selectedLanguage ? {color: '#d0021b'} : null}
                    onClick={props.onSelect.bind(null,language)} 
                    key={language}>
                    {language}
                    </li>
                    );
            })}
        </ul>
    );
}

class Popular extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
    }

    updateLanguage = (lang) => {
        this.setState({
            selectedLanguage: lang
        });
    }

    render(){
        return(
            <SelectLanguage 
            selectedLanguage={this.state.selectedLanguage} 
            onSelect={this.updateLanguage}/>
        );
    }
}

SelectLanguage.propTypes = {
    selectedLanguage: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired
}

export default Popular;