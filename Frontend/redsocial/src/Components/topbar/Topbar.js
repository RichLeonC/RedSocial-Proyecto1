import React, {useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Chat, DataObjectSharp, Notifications } from '@mui/icons-material';
import './topbar.css'
import Home from '../../Pages/Home/Home';
// import JSONDATA from 'C:/Users/USER/Documents/GitHub/RedSocial-Proyecto1/Frontend/redsocial/src/MOCK_DATA.json'
import Profile from '../../Pages/Profile/Profile.js';
import { withRouter } from 'react-router';


function Topbar(props) {
    const goHome=()=>{
        props.history.push("/home")
    }

    const goProfile=()=>{
        props.history.push("/Profile")
    }

    const [equipo, setEquipo] = useState([])

    React.useEffect= (() => {
        //console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async() => {
        const data = await fetch('http://localhost:3000/usuarios/')
        const users = await data.json()
        //console.log(users)
        setEquipo(users)
    }

    return (
        <div className='topbarContainer'>
            <div>
                <h1>Resultados</h1>
                <ul>
                    {
                        equipo.map(item => (
                            <li key="item.correoElectronico">{item.nombre} - {item.apellido1}</li>
                        ))
                    }
                </ul>
                </div>
            <div className='topbarLeft'>
            <span className='logo' onClick={()=>goHome()}>KS</span>
        </div>
            <div className='topbarCenter'>
            
            <div className='searchbar'>
                <SearchIcon></SearchIcon>
                <input placeholder='Buscar amigos' className='searchInput' type='text'></input>
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
