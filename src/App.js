import React,{ Component } from "react";
import "./App.css";
import { connect } from "react-redux";
class App extends React.Component{
    render(){
        return(
            <div className="App">
                <h1>Balance:
                  <span style={{color:'green'}}>
                    {this.props.amount}
                  </span>
                </h1>
                <br></br><br></br>
                <button onClick={this.props.onDeposit}>
                  Deposit
                </button>
                <button onClick={this.props.onWithDraw}>
                  WithDraw
                </button>
                <br></br><br></br>
                <h1>
                  {this.props.ministatement.map(el=>(
                      <p>{el.amt}</p>
                  ))}
                </h1>
            </div>
        )
    }
};
const receive = (state)=>{
  console.log(state);
  return{
    amount:state.bal,
    ministatement:state.statement
  }
};
const send = dispatch=>{
  return{
    onDeposit : ()=>dispatch({type:"DEPOSIT",value:5000}),
    onWithDraw : ()=>dispatch({type:"WITHDRAW",value:10000})
  }
};
export default connect(receive,send)(App);