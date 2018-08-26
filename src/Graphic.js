import React, { Component } from 'react';
import GraphicTop from './GraphicTop.js';
import GraphicBottom from './GraphicBottom.js';

class Graphic extends Component {
    
    render() {
        return (
            <div id="graphic">
            <GraphicTop/>
            <GraphicBottom/>
            </div>
        )    
    }
    
}

export default Graphic;