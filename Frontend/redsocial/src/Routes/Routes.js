import React from 'react';
import '../Routes/App.css';
import Login from '../Login/Login.js';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Profile from '../Pages/Profile/Profile';
import AuthProvider from '../Contexto/auth';
import PrivateRoute from '../Contexto/PrivateRoute';




//Componentes

//Componente principal que contiene las rutas a los otros componentes

export default function Routes() {
    

  return (
    <AuthProvider>
      <BrowserRouter>
          <Switch>
        
              <Route exact path="/" component={Login}/>
              <PrivateRoute exact path="/Home" component ={Home}/>
              {/*<Route exact path="/Profile/:usuario" component={Profile}/>*/}
              <Route exact path= "/Register" component ={Register}/>
              <Route exact path="/Profile" component={Profile}/>
              
          </Switch>
        </BrowserRouter>
      </AuthProvider>
  )
}

//<Route exact path="/Home" component ={Home}/>