import { Component } from "react";
import { Route, Redirect, Switch } from "wouter";
import Login from './Componentes/Login';
import Alumnos from './Componentes/Alumnos';
import Cursos from "./Componentes/Cursos";
import Registro from "./Componentes/Registro";
import './App.css'

export default class App extends Component{
  constructor (props){
    super(props);
    this.state = {}
  }

  render(){
    return(

      <>
        <Switch>
          <Route path={"/"}>
          <Redirect to="/login"/>
          </Route>
        
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/alumnos">
            <Alumnos/>
          </Route>

          <Route path="/alumnos/:curso/:id">
            {(params) =><Alumnos curso={params.curso} id={params.id}/>}
          </Route>

          <Route path="/Cursos">
            <Cursos/>
          </Route>

          <Route path="/Registro">
            <Registro/>
          </Route>
          
          <Route>404</Route>
        </Switch>
      </>
    ) 
  }
}