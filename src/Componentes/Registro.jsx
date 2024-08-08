import { Component } from "react";
// inputs
export default class Alumnos extends Component{
  constructor (props){
    super(props);
    this.state = {
    }
  }


  render(){
    return(
      <div className="Inputs">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    )
  }
}