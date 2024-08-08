import { Component } from "react";
import Boton from "./Boton";

export default class Alumnos extends Component{
  constructor (props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div className="Cursos">  
      <table border ="4">
      <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Grados</th>
          <th>Divisiones</th>
      </tr>
      <tr>
          <td>Melissa</td>
          <td>Burgo</td>
          <td>7</td>
          <td>2</td>
      </tr>
      <tr>
          <td>Joako</td>
          <td>Sosa</td>
          <td>7</td>
          <td>2</td>
      </tr>
      <tr>
          <td>Nicolas</td>
          <td>Correa</td>
          <td>3</td>
          <td>1</td>
      </tr>
      <tr>
          <td>Katalina</td>
          <td>Silos</td>
          <td>5</td>
          <td>9</td>
      </tr>
      <tr>
          <td>Agustina</td>
          <td>Batallanos</td>
          <td>5</td>
          <td>4</td>
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