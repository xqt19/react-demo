import logo from '../logo.svg';
import './Main.css';
import React from 'react';
import Fizzbuzz from './Fizzbuzz';
import Roman from './Roman';
import Prime from './Prime';
import List from './List';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      mode: null
    }
  }
  setMode=(mode)=>{
    this.setState({
      mode: mode
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        
        {this.state.mode === null?
        <div>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Hello! Choose an App to begin.
              </p>
              <div
            className={`text-capitalize h1 mb-4 w-100 text-center text-primary`}
          >
          </div>
          <div className="btn-group">
            <button className={`text-capitalize btn btn-primary btn-lg"`} type="button">Apps</button>
            <button
              type="button"
              className={`btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <button
                className="dropdown-item" onClick={()=>this.setMode("fizzbuzz")}>
                FizzBuzz 
              </button>
              <button
                className="dropdown-item" onClick={()=>this.setMode("roman")}>
                Roman Numerals 
              </button>
              <button
                className="dropdown-item" onClick={()=>this.setMode("prime")}>
                Prime Numbers 
              </button>
              <button
                className="dropdown-item" onClick={()=>this.setMode("list")}>
                To-Do List 
              </button>
              <div className="dropdown-divider"></div>
            </div>
          </div>          
        </div>
      :<></>}

      {this.state.mode === "fizzbuzz"?
      <div>
          <Fizzbuzz />
      </div>
      :<></>}

      {this.state.mode === "roman"?
      <div>
          <Roman />
      </div>
      :<></>}

      {this.state.mode === "prime"?
      <div>
          <Prime />
      </div>
      :<></>}

      {this.state.mode === "list"?
      <div>
          <List />
      </div>
      :<></>}

      {this.state.mode !== null?
      <div>
        <br></br><br></br>
          <p>------------</p>
          <p><button className={`text-capitalize btn btn-primary btn-lg"`} type="button" onClick={()=>this.setMode(null)}>Back to Main</button></p>
      </div>
      :<></>}

        </header>
      </div>
    )
  }
}
export default Main;