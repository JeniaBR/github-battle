import React, {Component} from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        };
    }

    render(){
        return(
            <Prompt header='Player'/>
        );
    }
}

export default PromptContainer;