import "./share.css";
import React,{useState,useEffect} from 'react';
import {PermMedia, Label,Room, EmojiEmotions} from '@mui/icons-material'
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function Share() {
  const cookies = new Cookies();

  const baseUrl = `http://localhost:3000/usuarios/${cookies.get("correoElectronico")}`;
  const [data,setData] = useState([]);

  const peticionGet = async()=>{ //Realiza peticiones Get al backend Matriculas
    await axios.get(baseUrl)
    .then(response=>{
        setData(response.data);
    }).catch(error=>{
        console.log(error);
    })
  }

  useEffect(() => { //Hace efecto la peticion
    peticionGet();
     
  }, [])
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder= {`Qué estás pensando ${data.nombre}?`}
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}