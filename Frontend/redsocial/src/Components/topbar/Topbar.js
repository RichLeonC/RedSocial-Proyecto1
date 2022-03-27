import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Chat, Notifications } from '@mui/icons-material';
import './topbar.css'
import Home from '../../Pages/Home/Home';
import Profile from '../../Pages/Profile/Profile.js';



export default function Topbar(props) {
    const goHome=()=>{
        props.history.push("/home")
    }
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
            <span className='logo' onClick={()=>goHome()}>KS</span>
        </div>
            <div className='topbarCenter'>
            
            <div className='searchbar'>
                <SearchIcon></SearchIcon>
                <input placeholder='Buscar amigos' className='searchInput'></input>
            </div>
            </div>
            
            <div className='topbarRight'>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Chat></Chat>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Notifications></Notifications>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>


        </div>
    )
}
