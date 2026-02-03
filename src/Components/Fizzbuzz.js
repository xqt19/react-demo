import React from "react";

class Fizzbuzz extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num: 0,


        }
    }

    clicked =()=>{
        let newnum = this.state.num +1
        this.setState({
            num:newnum
        })
    }
    reset =()=>{
        this.setState({
            num: 0
        })
    }

    render(){
        return(
            <div>
                <h1>Fizzbuzz</h1>
                <p>------------</p>

                <h4>In this exercise, create a code that counts up from 0.<br />
                At multiples of 5 it should display FIZZ.<br></br>
                At multiples of 7 it should display BUZZ.<br></br>
                At multiples of both 5 and 7 it should display FIZZBUZZ.<br></br></h4>
                <p>------------</p>

                {(this.state.num == 0 ? <h1>0</h1> : <></>)}
                {(this.state.num >0 && this.state.num%5 == 0 && this.state.num%7 != 0? <h1>FIZZ</h1> : <></>)}
                {(this.state.num >0 && this.state.num%7 == 0 && this.state.num%5 != 0? <h1>BUZZ</h1> : <></>)}
                {(this.state.num >0 && this.state.num%5 == 0 && this.state.num%7 == 0 ? <h1>FIZZBUZZ</h1> : <></>)}
                {(this.state.num >0 && this.state.num%5 != 0 && this.state.num%7 != 0 ? <h1>{this.state.num}</h1> : <></>)}
                
                <br></br>
                <button className="btn btn-primary" onClick={()=>{this.clicked()}}>Click!</button><br />
                <button className="btn btn-success" onClick={()=>{this.reset()}}>Reset</button>


            </div>
        )
    }
}
export default Fizzbuzz;