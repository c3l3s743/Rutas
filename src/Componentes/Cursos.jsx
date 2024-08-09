import { Component } from "react";
import Boton from "./comun/Boton";

export default class Alumnos extends Component{
  constructor (props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div className="Cursos">  
      <h2>Cursos</h2>
      <table border ="4">
      <tr>
          <th>Grados</th>
          <th>Divisiones</th>
      </tr>
      <tr>
          <td>3°</td>
          <td>1</td>
      </tr>
      <tr>
          <td>5°</td>
          <td>4</td>
      </tr>
      <tr>
          <td>5°</td>
          <td>9</td>
      </tr>
      <tr>
          <td>7°</td>
          <td>2</td>
      </tr>
      <tr>
          <td>7°</td>
          <td>7</td>
      </tr>
      </table>
      
      <Boton 
            ruta="/login"
      >Ir a Login
      </Boton>

      </div>
    )
  }
}