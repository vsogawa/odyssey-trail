import React, { Component } from 'react';
import Graphic from './Graphic.js';
import Status from './Status.js';

class MainPlay extends Component {
    
    render() {
        return (
            <div>
            <Graphic/>        
            <Status/>
            </div>
        )    
    }
    
}

export default MainPlay;