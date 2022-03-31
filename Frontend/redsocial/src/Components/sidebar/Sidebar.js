
import "./sidebar.css";
 import {
   RssFeed,
   Chat,
   Logout
 } from '@mui/icons-material';

import React,{Component,useState} from 'react';
import { withRouter } from 'react-router';
import Cookies from "universal-cookie";
 function Sidebar(props) {
  const cookies = new Cookies();
  const cerrarSesion=()=>{
    cookies.remove('correoElectronico',{path: '/'})
    cookies.remove('nombre',{path: '/'})
    cookies.remove('apellido1',{path: '/'})
    cookies.remove('apellido2',{path: '/'})
    cookies.remove('fechaNacimiento',{path: '/'})
    cookies.remove('clave',{path: '/'})
    cookies.remove('intereses',{path: '/'})
    cookies.remove('descripcionGeneral',{path: '/'})
    cookies.remove('hobbies',{path: '/'})
    props.history.push("/");
    
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
             <RssFeed className="sidebarIcon" /> 
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li htmlfo="log" className="sidebarListItem">
             <Logout htmlfor="log"className="sidebarIcon" />
            <span id="log" className="sidebarListItemText" onClick={cerrarSesion}>Cerrar sesión</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Sidebar);