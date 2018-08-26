import React, { Component } from 'react';

class Intro extends Component {
    
    handleSubmit(event) {
        event.preventDefault();
        let value = document.getElementById("option").value;
        if (value === "1") {
            this.props.changeWindowTo("MainPlay");
        }
        if (value === "2") {
            this.props.changeWindowTo("AboutTrail");
        }
        if (value === "3") {
            this.props.changeWindowTo("Ranking");
        }
        if (value === "4") {
            this.props.changeWindowTo("Options");
        }
    }
    
    render() {
        return (
            <div id="intro">
                <h1>Super Odyssey Trail</h1>
                <div>You may:
                    <ol>
                        <li>Travel the trail</li>
                        <li>Learn about the trail</li>
                        <li>See the Super Odyssey Trail Top Ten</li>
                        <li>Options</li>
                    </ol>
                What is your choice? <form onSubmit={this.handleSubmit.bind(this)}><input autoFocus id="option" type="number"/></form>
                </div>
            </div>
        )    
    }
    
}

export default Intro;