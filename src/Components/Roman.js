import React from "react";

class Roman extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num: 0,
            rom_num: 0,
            rom_num_translated: "X"
        }
    }

    clicked =()=>{
        let newnum = this.state.num +1
        this.setState({
            num:newnum
        })
    }
    changeNum =(e)=>{
        let rom_num = e.target.value
        let rom_array = []
        while(rom_num > 0)
        {
            if (rom_num >= 1000)
                {
                    rom_array.push("M")
                    rom_num -= 1000
                }
            else if (rom_num >= 900)
                {
                    rom_array.push("CM")
                    rom_num -= 900
                }
            else if (rom_num >= 500)
                {
                    rom_array.push("D")
                    rom_num -= 500
                }
            else if (rom_num >= 400)
                {
                    rom_array.push("CD")
                    rom_num -= 400
                }
            else if (rom_num >= 100)
                {
                    rom_array.push("C")
                    rom_num -= 100
                }
            else if (rom_num >= 90)
                {
                    rom_array.push("XC")
                    rom_num -= 90
                }
            else if (rom_num >= 50)
                {
                    rom_array.push("L")
                    rom_num -= 50
                }
            else if (rom_num >= 40)
                {
                    rom_array.push("XL")
                    rom_num -= 40
                }
            else if (rom_num >= 10)
                {
                    rom_array.push("X")
                    rom_num -= 10
                }
            else if (rom_num >= 9)
                {
                    rom_array.push("IX")
                    rom_num -= 9
                }
            else if (rom_num >= 5)
                {
                    rom_array.push("V")
                    rom_num -= 5
                }
            else if (rom_num >= 4)
                {
                    rom_array.push("IV")
                    rom_num -= 4
                }
            else if (rom_num >= 1)
                {
                    rom_array.push("I")
                    rom_num -= 1
                }
        }
        this.setState({
            rom_num:e.target.value,
            rom_num_translated: rom_array.join("")
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
                <h1>Roman Numerals Converter</h1>
                <p>------------</p>

                <h4>In this exercise, create a code that takes a positive integer and converts it to Roman numerals.<br />
                I = 1<br></br>
                V = 5<br></br>
                X = 10<br></br>
                L = 50<br></br>
                C = 100<br></br>
                D = 500<br></br>
                M = 1000<br></br></h4>
                <p>------------</p>

                <input type="number" className="form-control form-control-lg" id="numfield" onChange={(e)=>{this.changeNum(e)}}></input>
                <br/><br />

                {(this.state.rom_num <= 0 ? <h1>Please input a positive numeral</h1> : <></>)}
                {(this.state.rom_num > 0 ? <h1>{this.state.rom_num}</h1> : <></>)}
                {(this.state.rom_num > 0 ? <h1>{this.state.rom_num_translated}</h1> : <></>)}
            </div>
        )
    }
}
export default Roman;