import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar';
<<<<<<< Updated upstream
=======
import axios from 'axios';
import Cookies from 'universal-cookie';



>>>>>>> Stashed changes
export default function Home() {
  return (
   <div>
       <Topbar></Topbar>
       <div className="homeContainer">
        <Sidebar></Sidebar>
        <Feed></Feed>
<<<<<<< Updated upstream
=======
        <Register></Register>
>>>>>>> Stashed changes
        <Rightbar/>
      </div>
       
   </div>
  )
}
