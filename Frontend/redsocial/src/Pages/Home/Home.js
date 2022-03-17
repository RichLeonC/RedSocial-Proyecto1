import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Topbar from '../../Components/topbar/Topbar';
import Feed from '../../Components/feed/Feed';
import './home.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Rightbar from '../../Components/rightbar/Rightbar';
export default function Home() {
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
