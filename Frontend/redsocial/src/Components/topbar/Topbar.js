import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Chat, Notifications } from '@mui/icons-material';
import './topbar.css'
import Home from '../../Pages/Home/Home';
import JSONDATA from 'C:/Users/USER/Documents/GitHub/RedSocial-Proyecto1/Frontend/redsocial/src/MOCK_DATA.json'
import Profile from '../../Pages/Profile/Profile.js';
import { withRouter } from 'react-router';


function Topbar(props) {
    const goHome=()=>{
        props.history.push("/home")
    }

    const goProfile=()=>{
        props.history.push("/Profile")
    }

    
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
            <span className='logo' onClick={()=>goHome()}>KS</span>
        </div>
            <div className='topbarCenter'>
            
            <div className='searchbar'>
                <SearchIcon></SearchIcon>
                <input placeholder='Buscar amigos' className='searchInput' type='text'
                onChange={event => {setSearchTerm(event.target.value)}}>
                {JSONDATA.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div>
                            <p>{val.first_named}, {val.last_name}</p>
                        </div>
                    )
                })}

                </input>
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
                <img src="/assets/user.png" alt="" className="topbarImg" onClick={goProfile} />
            </div>


        </div>
    )
}

export default withRouter(Topbar);
