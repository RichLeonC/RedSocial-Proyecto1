import React from 'react';
import '../Routes/App.css';
import Login from '../Login/Login.js';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile/Profile'



//Componentes

//Componente principal que contiene las rutas a los otros componentes

export default function Routes() {
    


  return (

      <BrowserRouter>
          <Switch>
        
              <Route exact path="/" component={Login}/>
              <Route exact path="/Home" component ={Home}/>
              <Route exact path="/Profile/:usuario" component={Profile}/>
          </Switch>
          </BrowserRouter>
  )
}
