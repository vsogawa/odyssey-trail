import React, { Component } from 'react';

class AboutTrail extends Component {
    state = {
        text: ["Press enter to continue", "More explanation here", "Are you bored yet", "How do I autofocus the stupid button so I can just hit enter"],
        index: 0
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let value = this.state.index;
        let newValue = value + 1;
        if (newValue === this.state.text.length) {
            this.props.changeWindowTo("Intro");
            return;
        }
        this.setState({index: newValue})
    }

    render() {        
        let text = this.state.text;
        let i = this.state.index;
                
        return (
            <div id="aboutTrail">
            <h1>The Super Odyssey Trail</h1>
            Hello: {text[i]}
            <form onSubmit={this.handleSubmit.bind(this)}><input autoFocus/></form>
            </div>
        )    
    }
    
}

export default AboutTrail;