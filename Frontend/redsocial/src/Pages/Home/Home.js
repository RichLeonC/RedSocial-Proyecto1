import React,{useState,useEffect} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Topbar from '../../Components/topbar/Topbar';
import Feed from '../../Components/feed/Feed';
import './home.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Rightbar from '../../Components/rightbar/Rightbar';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {db, auth } from '../Home/firebase';
import { collection, query, where, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import User from '../../Components/chat/User';

export default function Home() {
  const cookies = new Cookies();
  const baseUrl = "http://localhost:3000/usuarios/"+cookies.get("correoElectronico");
  const [dataUsuario,setUsuario] = useState([]);
  const [users, setUsers] = useState([]);

  const peticionGet = async()=>{ //Realiza peticiones Get al backend 
      await axios.get(baseUrl)
      .then(response=>{
          setUsuario(response.data);
      }).catch(error=>{
          console.log(error);
      })
  }
  useEffect(() => { //Hace efecto la peticion
    
    peticionGet();
    const usersRef = collection(db, 'users')
    // create query objett
    const q = query(usersRef, where('uid', 'not-in', [auth.currentUser.uid]))
    //execute query 
    const unsub = onSnapshot(q, QuerySnapshot =>{
      let users = []
      QuerySnapshot.forEach(doc => {
          users.push(doc.data())
      })
      setUsers(users);
    });

    
    return () => unsub();
}, [])

  const pasa = dataUsuario.apellido1;
  console.log(pasa)
  console.log(users)
  return (
   <div>
       <Topbar></Topbar>
       <div className="homeContainer">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
        <div className='user-container'>
          {users.map(user => <User key={user.uid} user={user}/>)}

        </div>
      </div>
       
   </div>
  )
}
