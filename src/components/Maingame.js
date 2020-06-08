import React from 'react'

class Maingame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberGuessing: 0,
            currentGuessing: 0,
            randomNumber: 0,
            message: "",
        }
    }
    componentDidMount() {
        this.setState({
            randomNumber: this.ramDom()
        })
    }

    ///function
    ramDom = () => {
        return Math.floor(Math.random() * 100) + 1;
    }
    currentOnChage = (ev) => {
        this.setState({
            currentGuessing: Number(ev.target.value)
        })
    }
    guessing = () => {
        var { currentGuessing, randomNumber, message, numberGuessing } = this.state;
        message = "";
        if (currentGuessing > this.props.randomNumber) {
            message = "your number is bigger"
        }
        else if (currentGuessing < this.props.randomNumber) {
            message = "your number is smaller";
        }
        else {
            message = "congrastulation!!!!"
            alert(message)
        }
        numberGuessing++;
        this.setState({ message, numberGuessing });
        if (numberGuessing > 5) {
            alert('bạn đã thua!!!');
            this.newGame();
        }
        if (currentGuessing === 0) {
            alert("bạn cần nhập số cần kiểm tra!!")
            this.setState({
                numberGuessing: 0,
                currentGuessing: 0,
                message: "",
            })
        }
    }
    newGame = () => {
        this.setState({
            numberGuessing: 0,
            currentGuessing: 0,
            randomNumber: 0,
            message: "",
        })
    }
    render() {
        var { numberGuessing, currentGuessing, message } = this.state;
        return (

            <div className="main">
                <button onClick={this.newGame}>New Game</button>
                <hr />
                <p style={{ fontWeight: "bold" }}>số lần bạn đoán là: {numberGuessing}</p>
                <p style={{ fontWeight: "bold" }}>số bạn đoán là:{currentGuessing} </p>
                <input type="text" value={currentGuessing} onChange={this.currentOnChage} />
                <button onClick={this.guessing}>Check</button>
                <p>{message}</p>
            </div>
        )
    }
}
export default Maingame;