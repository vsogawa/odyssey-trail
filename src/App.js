import React, { Component } from 'react';
import './App.css';
import MainPlay from './MainPlay.js';
import Intro from './Intro.js';



class App extends Component {
    state = {
        currentWindow: "Intro",
    }
    
    changeWindowTo(newWindow) {
        this.setState({currentWindow: newWindow});
        console.log("window changed")
    }
    
  render() {
      let window;
      let current = this.state.currentWindow;
      
      if (current === "Intro") {
        window = <Intro changeWindowTo={this.changeWindowTo.bind(this)}/>    
      } else if (current === "MainPlay") {
          window = <MainPlay changeWindowTo={this.changeWindowTo.bind(this)}/>
      } else if (current === "Store") {
          window = <MainPlay/>
      } else if (current === "Supplies") {
          window = <MainPlay/>
      } else if (current === "Map") {
          window = <MainPlay/>
      } else if (current === "Pacing") {
          window = <MainPlay/>
      } else if (current === "Trade") {
          window = <MainPlay/>
      } else if (current === "Talk") {
          window = <MainPlay/>
      } else if (current === "Location") {
          window = <MainPlay/>
      } else if (current === "Hunting") {
          window = <MainPlay/>
      }
      
      
      
    return (
        <div id="main">{window}</div>
    );
  }
}

export default App;
