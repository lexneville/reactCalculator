import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    display: 0,
    n1: 0,
    n2: 0,
    op: "",
    numberEntry: 1,
    result: 0
  }

  numberButton = (n) => {
    if (this.state.numberEntry === 1) {
      this.setState({ n1: this.state.n1 + n });
      console.log("number inputted");
      console.log(this.state.n1);
    }
    if (this.state.numberEntry === 2) {
      this.setState({ n2: this.state.n2 + n });
      console.log("number inputted");
      console.log(this.state.n2);
    }
  }

  calculate = () => {
    if (this.state.op === "+") {
      this.setState({ result: this.state.n1 + this.state.n2 });
      
    }
    if (this.state.op === "x") {
      this.setState({ result: this.state.n1 * this.state.n2 });
      console.log(this.state.result);
    }
    if (this.state.op === "-") {
      this.setState({ result: this.state.n1 - this.state.n2 });
      console.log(this.state.result);
    }
    if (this.state.op === "÷") {
      this.setState({ result: this.state.n1 / this.state.n2 });
      console.log(this.state.result);
    }

  }

  operatorChoice = (operator) => {
    this.setState({
      op: operator,
      numberEntry: 2,
    })
    console.log(this.state.numberEntry);
    console.log(this.state.op)
  }

  clear = () => {
    this.setState({
      display: 0,
      n1: 0,
      n2: 0,
      op: 0,
      numberEntry: 1,
      result: 0
    })
  }

  updateDisplay = () => {
    
  }


  render() {

    console.log(this.state.result);
    return (
      <div className="calc">
        <p className="calcDisplay">{this.state.display}</p>
        <button className="clear" onClick={() => this.clear()} >Clear</button>
        <button className="divide" onClick={() => this.operatorChoice("÷")} >÷</button>
        <button className="seven" onClick={() => this.numberButton(7)} >7</button>
        <button className="eight" onClick={() => this.numberButton(8)} >8</button>
        <button className="nine" onClick={() => this.numberButton(9)} >9</button>
        <button className="subtract" onClick={() => this.operatorChoice('-')} >-</button>
        <button className="four" onClick={() => this.numberButton(4)} >4</button>
        <button className="five" onClick={() => this.numberButton(5)} >5</button>
        <button className="six" onClick={() => this.numberButton(6)} >6</button>
        <button className="add" onClick={() => this.operatorChoice("+")} >+</button>
        <button className="one" onClick={() => this.numberButton(1)} >1</button>
        <button className="two" onClick={() => this.numberButton(2)} >2</button>
        <button className="three" onClick={() => this.numberButton(3)} >3</button>
        <button className="multiply" onClick={() => this.operatorChoice("x")} >x</button>
        <button className="zero" onClick={() => this.numberButton(0)} >0</button>
        <button className="calculateResult" onClick={() => this.calculate()} >=</button>
      </div>
    )
  }
}

export default App;
