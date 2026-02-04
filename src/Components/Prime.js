import React from "react";

class Prime extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num: 1,
            prime_numbers: [2]
        }
    }

    isPrime=(num)=>{
        if (num %2 === 0 || num %3 === 0){return false}
        for (let i = 5; i*i<=num; i+=6)
        {
            if (num%i === 0 || num% (i+2) === 0){return false}
        }
        return true
    }

    clicked =(x)=>{
        let newnum = this.state.num +x
        let arr = this.state.prime_numbers
        if (x<0){arr.pop()}
        if (x>0)
        {
            if (newnum === 2){arr.push(3)}
            else if (newnum === 3){arr.push(5)}
            else
            {
                let active_num = arr[arr.length-1]+1
                let searching = true
                while (searching)
                {
                    if(this.isPrime(active_num))
                    {
                        arr.push(active_num)
                        searching = false
                    }
                    else {active_num++}
                }
            }
        }
        this.setState({
            num:newnum,
            prime_numbers: arr
        })
    }

    render(){
        return(
            <div>
                <h1>Prime Number Calculator</h1>
                <p>------------</p>

                <h4>In this exercise, create a code that displays prime numbers.<br />
                Prime numbers are natural numbers greater than 1 with exactly two factors: 1 and themselves.<br></br></h4>
                <p>------------</p>

                <h4>Number of Prime Numbers to display: {this.state.num} <br /></h4>
                <button className="btn btn-primary m-2" onClick={()=>{this.clicked(+1)}}>Increase</button>
                {(this.state.num >1 ? <button className="btn btn-danger m-2" onClick={()=>{this.clicked(-1)}}>Decrease</button> : <></>)}
                <h4>The first {this.state.num >1 ? this.state.num : ""} prime number{this.state.num >1 ? "s are" : " is"}: {this.state.prime_numbers.join(",")}</h4>


            </div>
        )
    }
}
export default Prime;