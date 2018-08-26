import React, { Component } from 'react';
import './App.css';
import MainPlay from './MainPlay.js';
import Intro from './Intro.js';
import AboutTrail from './AboutTrail.js';
import Ranking from './Ranking.js';
import Options from './Options.js';



class App extends Component {
    state = {
        currentWindow: "Intro",
        date: "May 1, 2018",
        weather: "cloudy",
        health: "okay",
        food: 500,
        nextLandmark: 105,
        milesTraveled: 5003,
        currentMoney: 500,
        powerMoons: 206,
        clothing: 6,
        ammo: 97,
        people: {
            person1: 50,
            person2: 50,
            person3: 50,
            person4: 50,
            person5: 50,
        }
    }
    
    changeWindowTo(newWindow) {
        this.setState({currentWindow: newWindow});
        console.log("window changed to " + newWindow)
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
      } else if (current === "AboutTrail") {
          window = <AboutTrail changeWindowTo={this.changeWindowTo.bind(this)}/>
      } else if (current === "Ranking") {
          window = <Ranking changeWindowTo={this.changeWindowTo.bind(this)}/>
      } else if (current === "Options") {
          window = <Options changeWindowTo={this.changeWindowTo.bind(this)}/>
      }
      
      
      
    return (
        <div id="main">{window}</div>
    );
  }
}

export default App;
