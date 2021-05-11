import React, { Component } from 'react'
import './App.css';
import one from './images/assets/1 dice';
import two from './images/assets/2 dice';
import three from '/Users/vanomooserecords/Desktop/VSchool/rolling-dice-app/rolling-dice-app/src/images/assets/3 dice';
import four  from '/Users/vanomooserecords/Desktop/VSchool/rolling-dice-app/rolling-dice-app/src/images/assets/4 dice';
import five  from '/Users/vanomooserecords/Desktop/VSchool/rolling-dice-app/rolling-dice-app/src/images/assets/5 dice';
import six  from '/Users/vanomooserecords/Desktop/VSchool/rolling-dice-app/rolling-dice-app/src/images/assets/6 dice';


class App extends Component {
  constructor () {
    super()
    this.state={
      numberOfDice: null,
      rolls: [],
      rollSum: null
    }

  }

    diceRoll = numberOfDice => {
     let rolls = [];
     
     for (let i = 0; i < numberOfDice; i++) {
       rolls[i] = Math.floor(Math.random() * 6) +1;
       
     } 
     this.setState({
       numberOfDice, rolls
     })
   }
   
  
  render () {
    return (
      <>
      <div className="App">
        <h1> Rolling Dice React App V School</h1>

        <h3>How many dice do you want to roll?</h3>

        <div className="die-buttons">
          {[1,2,3,4,5,6].map(number => {
            let text = number === 1 ? "die" : "dice";
            return (

              <button key = {number} onClick = {() => this.diceRoll(number)} className="dice-button"> {number} {text} </button>
            )
            
            
          })}
        </div>

        {this.state.rolls.map ((roll, index) => <DiceImage roll={roll} key={index} /> ) }
      </div>

       
      </>
    )
  }
}
 
 const DiceImage = ({roll}) => {
  if  (roll ===1) {
    return <img className="dice-image" src={one} alt="1" />
  } else if (roll === 2) {
    return <img className="dice-image" src={two} alt="2" />
  } else if (roll === 3) {
   return <img className="dice-image" src={three} alt="3" />
 } else if (roll === 4) {
 return <img className="dice-image" src={four} alt="4" />
 } else if (roll === 5) {
   return <img className="dice-image" src={five} alt="5" />
 } else if (roll === 6) {
   return <img className="dice-image" src={six} alt="6" />
 }
};


export default App