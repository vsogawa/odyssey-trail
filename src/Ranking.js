import React, { Component } from 'react';

class Ranking extends Component {
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.changeWindowTo("Intro");
        return;
    }
    
    render() {
        return (
            <div id="ranking">
            <h1>Ranking</h1>
            <ol>
                <li>Waluigi</li>
                <li>Waluigi</li>
                <li>Waluigi</li>
                <li>Waluigi</li>
                <li>Waluigi</li>
                <li>Waluigi</li>
                <li>Waluigi</li>
                <li>Waluigi</li>
                <li>Waluigi</li>
                <li>Waluigi</li>
            </ol>
            
            <form onSubmit={this.handleSubmit.bind(this)}><input autoFocus/></form>

            </div>
        )    
    }
    
}

export default Ranking;