import React from 'react';
import '../Routes/App.css';
import Login from '../Login/Login.js';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

//Componentes

//Componente principal que contiene las rutas a los otros componentes

export default function Routes() {
    

  return (

      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Login}/>
          </Switch>
          </BrowserRouter>
  )
}
