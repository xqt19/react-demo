import React from "react";
import './List.css'

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list: [],
            word: ""
        }
    }
    controlWord =(word)=>{
        this.setState({
            word: word
        })
    }
    addToList = ()=>{
        let newlist = this.state.list
        newlist.push(this.state.word)
        this.setState({
            list:newlist
        })
    }
    removeFromList = (index) =>{
        let newlist = this.state.list
        newlist.splice(index,1)
        this.setState({
            list:newlist
        })
    }

    render(){
        return(
            <div>
                <h1>List App</h1>
                <p>------------</p>
                
                <h4>In this exercise, create a To-do List program.<br />
                You should be able to add and remove items from the list.<br></br></h4>
                <p>------------</p>
                {this.state.list.length === 0? <div>Your List is Empty! Add Something Quick!</div>:<></>}
                {this.state.list.length > 0? 
                <div>
                    Your List<p></p>
                    <ul>
                  {this.state.list.map((item,index)=>
                  {return <div key={index}><div className="d-flex justify-content-around"><li>{item}</li>
                   <button type ="button" className="btn btn-secondary btn-circle" onClick={()=>this.removeFromList(index)}><span aria-hidden="true">❌</span></button>
                </div></div>}
                  )}                        
                    </ul>
  
                </div>:<></>}
                <p></p>
                <input type="text" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>this.controlWord(e.target.value)}></input>
                <br></br>
                <button className="btn btn-primary" onClick={()=>this.addToList()}>Add to List</button>
            </div>
        )
    }
}
export default List;