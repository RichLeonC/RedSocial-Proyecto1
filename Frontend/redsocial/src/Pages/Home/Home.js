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
import { StackedLineChartTwoTone } from '@mui/icons-material';

export default function Home() {
  const cookies = new Cookies();
  const baseUrl = "http://localhost:3000/usuarios/"+cookies.get("correoElectronico");
  const [dataUsuario,setUsuario] = useState([]);
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState('');

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

  const selectUser = (user) =>{
    setChat(user);
    console.log(user)

  }

  return (
   <div>
       <Topbar></Topbar>
       <div className="homeContainer">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
        <div className='user-container'>
          {users.map(user => <User key={user.uid} user={user} selectUser={selectUser}/>)}
        </div>

        <div className='messages_container'>
          {chat ? (<div className='message_user'>
              <h3>{chat.form3}</h3>
            </div> ):( <h3 className='no_conv'>Elija un usuario</h3>

          )}
    
        </div>
      </div>
       
   </div>
  )
}
