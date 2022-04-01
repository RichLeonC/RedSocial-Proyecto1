import React,{useState,useEffect} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Topbar from '../../Components/topbar/Topbar';
import Feed from '../../Components/feed/Feed';
import './home.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Rightbar from '../../Components/rightbar/Rightbar';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function Home() {
  const cookies = new Cookies();
  const baseUrl = "http://localhost:3000/usuarios/"+cookies.get("correoElectronico");
  const [dataUsuario,setUsuario] = useState([]);

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

    
}, [])
  const pasa = dataUsuario.apellido1;
  console.log(pasa)

  return (
   <div>
       <Topbar></Topbar>
       <div className="homeContainer">
        <Sidebar></Sidebar>
        <Feed></Feed>
        
        <Rightbar/>
      </div>
       
   </div>
  )
}
