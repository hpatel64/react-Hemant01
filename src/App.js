import React from "react";
// import "./style.css";
import { stockData } from "./data";
import ShowData from"./ShowData.js"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      count:0,
      stockInfo:stockData[0]
    }
    this.onClickFunc = this.onClickFunc.bind(this)
  }
  onClickFunc(events){ 
    if (this.state.count<5  && events.target.value==="+"){
    this.setState({count: this.state.count+1,stockInfo:stockData[this.state.count+1]})
    }  
    if (this.state.count>0  && events.target.value==="-"){
    this.setState({count: this.state.count-1,stockInfo:stockData[this.state.count-1]})
    }
  }
  componentDidMount(){
  }
  render() { 
    return <div className="cls1">
      <ShowData recordToShow = {this.state.stockInfo} />
      <button onClick={this.onClickFunc} value="+">+</button>
      <p className="cntP">{this.state.count}</p>
      <button onClick={this.onClickFunc} value="-">-</button>
      </div>;
  }
}
export default App