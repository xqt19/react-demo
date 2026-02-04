import React from "react";

class Roman extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rom_num: 0,
            rom_num_translated: "X",
            rom_string: "",
            rom_string_translated: 0
        }
    }

    // changeString =(e)=>{
    //     let rom_string = e.target.value
    //     let rom_string_translated = 0
    //     this.setState({
    //         rom_string: rom_string,
    //         rom_string_translated: rom_string_translated
            
    //     })
    // }
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

    render(){
        return(
            <div>
                <h1>Roman Numerals Converter</h1>
                <p>------------</p>

                <h4>In this exercise, create a code that takes a positive integer and converts it to Roman numerals.<br /></h4>
                <h6>
                I = 1<br />
                V = 5<br />
                X = 10<br />
                L = 50<br />
                C = 100<br />
                D = 500<br />
                M = 1000<br /></h6>

                <input type="number" className="form-control form-control-lg" id="field1" onChange={(e)=>{this.changeNum(e)}}></input>
                <br/>

                {(this.state.rom_num <= 0 ? <h5>Please input a positive numeral</h5> : <></>)}
                {(this.state.rom_num > 0 ? <h5>{this.state.rom_num}</h5> : <></>)}
                {(this.state.rom_num > 0 ? <h5>{this.state.rom_num_translated}</h5> : <></>)}

                {/* <br /><br />
                <p>------------</p>
                <h4>Now convert roman numerals to integers</h4>
                <br />
                <input type="text" className="form-control form-control-lg" id="field2" onChange={(e)=>{this.changeString(e)}}></input>
                <br/>
                {(this.state.rom_string_translated <= 0 ? <h5>Please input a valid string</h5> : <></>)}
                {(this.state.rom_string_translated > 0 ? <h5>{this.state.rom_string}</h5> : <></>)}
                {(this.state.rom_string_translated > 0 ? <h5>{this.state.rom_string_translated}</h5> : <></>)} */}

            </div>
        )
    }
}
export default Roman;