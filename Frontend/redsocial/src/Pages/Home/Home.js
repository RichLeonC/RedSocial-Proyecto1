import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Register from '../Register/Register';


export default function Home() {
  return (
   <div>
       <Topbar></Topbar>
       <div className="homeContainer">
        <Feed></Feed>
         <Register></Register>
        <Rightbar/>
      </div>
       
   </div>
  )
}
