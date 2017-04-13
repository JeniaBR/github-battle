import React, {Component} from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        };
    }

    handleUpdateUser = (e) => {
        console.log(e.target.value);
        this.state({
            username: e.target.value
        });
    }

    render(){
        return(
            <Prompt
            onUpdateUser={this.handleUpdateUser} 
            header='Player'/>
        );
    }
}

export default PromptContainer;