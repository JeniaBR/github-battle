import React, {Component} from 'react';

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
        let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return(
            <ul className='languages'>
                {languages.map((language)=>{
                    return (
                        <li 
                        style={language=== this.state.selectedLanguage ? {color: '#d0021b'} : null}
                        onClick={this.updateLanguage.bind(null,language)} 
                        key={language}>
                        {language}
                        </li>
                        );
                })}
            </ul>
        );
    }
}

export default Popular;