import React, { Component } from 'react'
import '../Calculator/Calculator.css'

export default class Calculotor extends Component {
  state = {
    expression: '',
    vituralArr: '',
    result: "0",
  }


  // clean man hinh
  refresh = () => {
    this.setState({
      expression: "",
      vituralArr: '',
      result: '0',
    })
  }

  //nhap so
  handleNumberClick = (e) => {
    const number = e.target.value;
    this.setState({
      expression: this.state.expression + number,
      vituralArr: this.state.vituralArr + number
    })
  }


  handleActionClick = (e) => {
    const action = e.target.value;
    this.setState({
      expression: this.state.vituralArr + action,
      vituralArr: this.state.vituralArr + action
    })
  }

  handleEqualClick = () => {
    const expressionAsArray = this.state.vituralArr;
    let num1Arr;// so thu nhat
    let num2Arr;
    let action;
    let j = 0;
    let result = parseFloat(this.state.vituralArr);
    for (let i = 0; i < expressionAsArray.length; i++) {
      if (expressionAsArray[i] === '+'
        || expressionAsArray[i] === '-'
        || expressionAsArray[i] === '*'
        || expressionAsArray[i] === '/'
      ) {
        j = i;
        num1Arr = parseFloat(expressionAsArray.slice(0, j));
        action = expressionAsArray[i];
        num2Arr = parseFloat(expressionAsArray.slice(i + 1, expressionAsArray.length));
        console.log(num1Arr);
        console.log(num2Arr);
        console.log(action);
        if (action === '+') {
          result = num1Arr + num2Arr;
        } else if (action === '-') {
          result = num1Arr - num2Arr;
        } else if (action === '*') {
          result = num1Arr * num2Arr;
        } else if (action === '/') {
          result = num1Arr / num2Arr;
        }

      }
      else{
        result = result;
      }
      this.setState({
        result: result,
        vituralArr: result,
      })
    }
  }


    render() {
      return (
        <div className='calculator container'>
          <div className='row'>
            <div className='screen'>
              <span>{this.state.expression} </span>
              <br></br>
              <p className='d-block'>
                <span>{this.state.result}</span>
              </p>

            </div>
          </div>
          <div className='container'>
            <table>
              <tr>
                <td>
                  <button onClick={this.handleNumberClick} value='7' >7</button>
                </td>
                <td>
                  <button onClick={this.handleNumberClick} value='8' >8</button>
                </td>
                <td>
                  <button onClick={this.handleNumberClick} value='9' >9</button>
                </td>
                <td>
                  <button onClick={this.handleActionClick} value='/' >/</button>
                </td>
                <td>
                  <button onClick={this.refresh}>CE</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={this.handleNumberClick} value='4' >4</button>
                </td>
                <td>
                  <button onClick={this.handleNumberClick} value='5' >5</button>
                </td>
                <td>
                  <button onClick={this.handleNumberClick} value='6' >6</button>
                </td>
                <td>
                  <button onClick={this.handleActionClick} value='*' >*</button>
                </td>
                <td>
                  <button onClick={this.refresh}>C</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={this.handleNumberClick} value='1' >1</button>
                </td>
                <td>
                  <button onClick={this.handleNumberClick} value='2' >2</button>
                </td>
                <td>
                  <button onClick={this.handleNumberClick} value='3' >3</button>
                </td>
                <td>
                  <button onClick={this.handleActionClick} value='-' >-</button>
                </td>
                <td rowSpan={2}>
                  <button className='action' onClick={this.handleEqualClick} value='=' >=</button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button onClick={this.handleNumberClick} value='0' >0</button>
                </td>
                <td>
                  <button onClick={this.handleActionClick} value='.' >.</button>
                </td>
                <td>
                  <button onClick={this.handleActionClick} value='+' >+</button>
                </td>
              </tr>
            </table>
            {/* <div className='row'>
              <button className='col-2' onClick={this.handleNumberClick} value='7' >7</button>
              <button className='col-2' onClick={this.handleNumberClick} value='8' >8</button>
              <button className='col-2' onClick={this.handleNumberClick} value='9' >9</button>
              <button className='col-2' onClick={this.handleActionClick} value='/' >/</button>
              <button className='col-2' onClick={this.refresh}>CE</button>
            </div>
            <div className='row'>
              <button className='col-2' onClick={this.handleNumberClick} value='4' >4</button>
              <button className='col-2' onClick={this.handleNumberClick} value='5' >5</button>
              <button className='col-2' onClick={this.handleNumberClick} value='6' >6</button>
              <button className='col-2' onClick={this.handleActionClick} value='*' >*</button>
              <button className='col-2' onClick={this.refresh}>C</button>
            </div>
            <div className='row'>
              <div className='col-8'>
                <div className='row'>
                  <button className='col-3' onClick={this.handleNumberClick} value='1' >1</button>
                  <button className='col-3' onClick={this.handleNumberClick} value='2' >2</button>
                  <button className='col-3' onClick={this.handleNumberClick} value='3' >3</button>
                  <button className='col-3' onClick={this.handleActionClick} value='-' >-</button>
                </div>
                <div className='row'>
                  <button className='col-6' onClick={this.handleNumberClick} value='0' >4</button>
                  <button className='col-3' onClick={this.handleNumberClick} value='.' >5</button>
                  <button className='col-3' onClick={this.handleActionClick} value='+' >+</button>
                </div>
              </div>
              <div className='col-2 action'>
                <button onClick={this.handleActionClick} value='=' >=</button>
              </div>
            </div> */}
          </div>



        </div>
      )
      // constructor(props) {
      //   super(props);

      //   this.state = {
      //     first: 0,
      //     second: 0,
      //     action: '',
      //     putSecondNumber: 0
      //   };

      //   this.handleNumberClick = this.handleNumberClick.bind(this);
      //   this.handleActionClick = this.handleActionClick.bind(this);
      //   this.refresh = this.refresh.bind(this);
      // }

      // // reset calculator
      // refresh() {
      //   this.setState({
      //     first: 0,
      //     second: 0,
      //     action: '',
      //     putSecondNumber: 0
      //   });
      // }

      // handleNumberClick(e) {
      //   const symbol = parseInt(e.target.value, 10);

      //   // if first number is writen then start writing second number
      //   if (this.state.putSecondNumber) {
      //     if (this.state.second === 0 && symbol !== 0){
      //       this.setState({second: symbol});

      //     } else {
      //       const addition = this.state.second * 10 + symbol;
      //       this.setState({second: addition});
      //     };

      //   } else {
      //     if (this.state.first === 0 && symbol !== 0){
      //       this.setState({first: symbol});

      //     } else {
      //       const addition = this.state.first * 10 + symbol;
      //       this.setState({first: addition});
      //     };
      //   }
      // }

      // handleActionClick(e) {
      //   const action = e.target.value;

      //   // does this after the first input of a symbol
      //   if (this.state.putSecondNumber > 0 && this.state.second !== 0) {
      //     // does this if the input isn't equals sign
      //     if (action !== '=') {
      //       if (this.state.action === '+') {
      //         this.setState({first: this.state.first + this.state.second, action: action, second: 0});

      //       } else if (this.state.action === '-') {
      //         this.setState({first: this.state.first - this.state.second, action: action, second: 0});

      //       } else if (this.state.action === '*' || this.state.action === 'x') {
      //         this.setState({first: this.state.first * this.state.second, action: action, second: 0});

      //       } else if (this.state.action === '/') {
      //         this.setState({first: this.state.first / this.state.second, action: action, second: 0});

      //       }
      //       // does this if the input is equals sign
      //     } else {
      //       if (this.state.action === '+') {
      //         this.setState({first: this.state.first + this.state.second, action: '', second: 0});

      //       } else if (this.state.action === '-') {
      //         this.setState({first: this.state.first - this.state.second, action: '', second: 0});

      //       } else if (this.state.action === '*' || this.state.action === 'x') {
      //         this.setState({first: this.state.first * this.state.second, action: '', second: 0});

      //       } else if (this.state.action === '/') {
      //         this.setState({first: this.state.first / this.state.second, action: '', second: 0});
      //       }
      //     }
      //     // runs the first time
      //   } else {
      //     this.setState({action: action, putSecondNumber: this.state.putSecondNumber + 1});

      //   }
      // }

      // render() {
      //   return (
      //     <div className='everything'>
      //       <div className="app">
      //         <div className='header'>CALCULATOR</div>
      //         <div className='calc-body'>
      //           <div className='row screen'>
      //           {/* if you are typing the second number, show it. if it isnt the second number show first number or result */}
      //             <span className='first'>{this.state.second === 0 ? this.state.first : this.state.second} </span>
      //             <span className='symbol'>{this.state.action}</span>
      //           </div>
      //           <div className='row'>
      //             <button onClick={this.handleNumberClick} value='7' >7</button>
      //             <button onClick={this.handleNumberClick} value='8' >8</button>
      //             <button onClick={this.handleNumberClick} value='9' >9</button>
      //             <button onClick={this.handleActionClick} value='/' >/</button>
      //           </div>

      //           <div className='row'>
      //             <button onClick={this.handleNumberClick} value='4' >4</button>
      //             <button onClick={this.handleNumberClick} value='5' >5</button>
      //             <button onClick={this.handleNumberClick} value='6' >6</button>
      //             <button onClick={this.handleActionClick} value='x' >x</button>
      //           </div>

      //           <div className='row'>
      //             <button onClick={this.handleNumberClick} value='1' >1</button>
      //             <button onClick={this.handleNumberClick} value='2' >2</button>
      //             <button onClick={this.handleNumberClick} value='3' >3</button>
      //             <button onClick={this.handleActionClick} value='-' >-</button>
      //           </div>

      //           <div className='row'>
      //             <button onClick={this.handleNumberClick} value='0' >0</button>
      //             <button onClick={this.handleClick} value='.' >.</button>
      //             <button onClick={this.handleActionClick} value='=' >=</button>
      //             <button onClick={this.handleActionClick} value='+' >+</button>
      //           </div>

      //           <div>
      //             <button onClick={this.refresh}>C</button>
      //           </div>
      //         </div>
      //       </div>
      //       <footer>
      //         Made By Adomas Skliutas &copy;
      //       </footer>
      //     </div>
      //   );
    }
  }
