import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Chat, Notifications } from '@mui/icons-material';
import './topbar.css'
export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
            <span className='logo'>KS</span>
        </div>
            <div className='topbarCenter'>
            
            <div className='searchbar'>
                <SearchIcon></SearchIcon>
                <input placeholder='Buscar amigos' className='searchInput'></input>
            </div>
            </div>
            
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
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