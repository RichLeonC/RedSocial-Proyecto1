import "./share.css";
import React,{useState,useEffect, useRef} from 'react';
import {PermMedia, Label,Room, EmojiEmotions} from '@mui/icons-material'
import axios from 'axios';
import Cookies from 'universal-cookie';


export default function Share() {
  const cookies = new Cookies();

  const baseUrl = `http://localhost:3000/usuarios/${cookies.get("correoElectronico")}`;
  const [data,setData] = useState([]);
  const [file,setFile] = useState([]);

  const peticionGet = async()=>{ //Realiza peticiones Get al backend Matriculas
    await axios.get(baseUrl)
    .then(response=>{
        setData(response.data);
    }).catch(error=>{
        console.log(error);
    })
  }

  const descripcion = useRef();

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
            ref={descripcion}
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Foto o Video</span>
                    <input style={{"display":"none"}}type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                </label>
            </div>
            <button className="shareButton">Compartir</button>
        </div>
      </div>
    </div>
  );
}