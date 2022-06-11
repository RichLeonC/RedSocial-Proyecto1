
import "./sidebar.css";
import { signOut } from "firebase/auth";
import {RssFeed,Chat,Logout} from '@mui/icons-material';
import React,{Component,useState, useContext} from 'react';
import { withRouter } from 'react-router';
import Cookies from "universal-cookie";
import { updateDoc, doc } from "firebase/firestore";
import { auth, db} from '../../Pages/Home/firebase';
import { AuthContext } from '../../Contexto/auth';
import userEvent from "@testing-library/user-event";
import { Link } from "react-router-dom";




 function Sidebar(props) {
   const cookies = new Cookies();
   const { user } = useContext(AuthContext);
  const cerrarSesion= async ()=>{
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
      });
    await auth.signOut();
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
        
      {user ? (
          <>
            <Link to="/Profile">Feed</Link>
            <button className="btn" onClick={cerrarSesion}>
              Logout
            </button>
          </>
        ) : (
          <>
            
          </>
        )}

  
      </div>
    </div>
  );
}

export default withRouter(Sidebar);