import { Component } from "react";
import { Route, Redirect } from "wouter";
import Login from './Componentes/Login';
import Alumnos from './Componentes/Alumnos';
import './App.css'

export default class App extends Component{
  constructor (props){
    super(props);
    this.state = {}
  }

  render(){
    return(

      <>
      <Route path={"/"}>
      <Redirect to="/login"/>
      </Route>
      
      <Route path="/login">
        <Login
        cambiarMenu = {(opcion) => this.setState({menu:opcion})}
        />
        </Route>

        <Route path="/alumnos">
        <Alumnos
        cambiarMenu = {(opcion) => this.setState({menu:opcion})}
        />
        </Route>
      </>
    ) 
  }
}