import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar';
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
