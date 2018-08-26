import React, { Component } from 'react';

class Options extends Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.changeWindowTo("Intro");
        return;
    }
    
    render() {
        return (
            <div id="options">Options
            
            <form onSubmit={this.handleSubmit.bind(this)}><input autoFocus/></form>
            </div>
        )    
    }
    
}

export default Options;