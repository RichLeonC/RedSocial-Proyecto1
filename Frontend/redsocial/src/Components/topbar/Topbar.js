import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Chat, Notifications } from '@mui/icons-material';
import './topbar.css'
import Home from '../../Pages/Home/Home';
import Profile from '../../Pages/Profile/Profile.js';
import { withRouter } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';


function Topbar(props) {
    const goHome = () => {
        props.history.push("/home")
    }

    const goProfile = () => {
        props.history.push("/Profile")
    }

    const baseUrl = "http://localhost:3000/usuarios";
    const [data, setData] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    //    const navigate = useNavigate();
    const Searcher = async (e) => {
        const palabra = e.target.value;
        setData(palabra);
    }

    useEffect(() => {
        if (data.length > 0)
            peticionGet();
    }, [data]);

    const peticionGet = async () => { //Realiza peticiones Get al backend
        console.log(data);
        await axios.get(baseUrl + "/" + data + "/2")
            .then(response => {
                setUsuarios(response.data);
            }).catch(error => {
                console.log(error);
            })
    }


    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo' onClick={() => goHome()}>KS</span>
            </div>
            <div className='topbarCenter'>

                <div className='searchbar'>
                    <SearchIcon></SearchIcon>
                    <input placeholder='Buscar amigos' className='searchInput' onChange={Searcher}></input>
                </div>
            </div>
            <br />

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

             <div>
                {usuarios.map((usuario) => (
                    <div className="card" style={{width: "18rem", position:'relative', bottom: '-6rem', left: '-50rem'}}>
                        <div className="card-body">
                        <h5 className="card-title">{usuario.correoElectronico}</h5>
                        <p className="card-text">{usuario.nombre} {usuario.apellido1} {usuario.apellido2}</p>
                        <a href="#" className="btn btn-primary">Ir a perfil</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}

export default withRouter(Topbar);
