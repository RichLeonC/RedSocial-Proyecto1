
import "./sidebar.css";
 import {
   RssFeed,
   Chat,
   Logout
 } from '@mui/icons-material';

import React,{Component,useState} from 'react';
export default function Sidebar(props) {
  
  const cerrarSesion=()=>{
    props.history.push("/")
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
             <RssFeed className="sidebarIcon" /> 
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
             <Logout for="log out"className="sidebarIcon" />
            <span  id="log out" className="sidebarListItemText" onClick={cerrarSesion}>Cerrar sesión</span>
          </li>
        </ul>
      </div>
    </div>
  );
}