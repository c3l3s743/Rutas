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
        <div>
        <p>Nombre: </p>
        <input type="text"/>
        </div>

        <div>
        <p>Apellido: </p>
        <input type="text" />
        </div>

        <div>
        <p>Grado: </p>
        <input type="number" />
        </div>

        <div>
        <p>División: </p>
        <input type="number" />
        </div>
      </div>
      
    )
  }
}