import React from "react";
import "./style.css";
class ShowData extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      company:this.props.recordToShow.company,
      ticker:this.props.recordToShow.ticker,
      stockPrice:this.props.recordToShow.stockPrice,
      timeElapsed:this.props.recordToShow.timeElapsed
    }
  }
  componentDidMount(){ 
  }
  render(){
   
    return <div className="cls2">
            <p>{this.props.recordToShow.company}</p>
            <p>{this.props.recordToShow.ticker}</p>
            <p>{this.props.recordToShow.stockPrice}</p>
            <p>{this.props.recordToShow.timeElapsed}</p>
            </div>
  }
}
export default ShowData