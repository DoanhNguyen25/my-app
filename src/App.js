import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Maingame from './components/Maingame';

class RandomGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomNumber : 0
    }
  }
  componentDidMount() {
    this.setState({
      randomNumber: this.ramDom()
    })
  }

  // ///function
  ramDom = () => {
    return Math.floor(Math.random() * 100) + 1;
  }
  // currentOnChage = (ev) => {
  //   this.setState({
  //     currentGuessing: Number(ev.target.value)
  //   })
  // }
  // guessing = () => {
  //   var { currentGuessing, randomNumber, message, numberGuessing } = this.state;
  //   message = "";
  //   if (currentGuessing > randomNumber) {
  //     message = "your number is bigger"
  //   }
  //   else if (currentGuessing < randomNumber) {
  //     message = "your number is smaller";
  //   }
  //   else {
  //     message = "congrastulation!!!!"
  //     alert(message)
  //   }
  //   numberGuessing++;
  //   this.setState({ message, numberGuessing });
  //   if (numberGuessing > 5) {
  //     alert('bạn đã thua!!!');
  //     this.newGame();
  //   }
  //   if (currentGuessing === 0) {
  //     alert("bạn cần nhập số cần kiểm tra!!")
  //     this.setState({
  //       numberGuessing: 0,
  //       currentGuessing: 0,
  //       message: "",
  //     })
  //   }
  // }
  // newGame = () => {
  //   this.setState({
  //     numberGuessing: 0,
  //     currentGuessing: 0,
  //     randomNumber: 0,
  //     message: "",
  //   })
  // }

  render() {

    return (
      <div>
        <Header randomNumber = {this.state.randomNumber} />
        <Maingame randomNumber = {this.state.randomNumber} />
      </div>
    )
  }
}

export default RandomGame;
