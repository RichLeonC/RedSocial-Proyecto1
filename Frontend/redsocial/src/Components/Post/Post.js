import "./post.css";
import React, { useState, useEffect } from 'react';
import { MoreVert } from "@mui/icons-material";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ModalHeader, Modal, Button, ModalBody, ModalFooter } from 'reactstrap';
import CommentIcon from '@mui/icons-material/Comment';
// import { Users } from "../../dummyData";


export default function Post(props) {
  const baseUrl = `http://localhost:3000/posts/r29leonc@gmail.com`
  const baseUrlImg = `http://localhost:3000/images/${props.post.img}`
  const [dataPost, setDataPost] = useState([]);
  const [modalComentarios,setModalComentarios] = useState(false);

  const [imgSeleccionada, setImgSeleccionada] = useState([]);

  const abrirCerrarModalComentarios=()=>{
    setModalComentarios(!modalComentarios);
  }

  const peticionGet = async () => { //Realiza peticiones Get al backend Matriculas
    await axios.get(baseUrl)
      .then(response => {
        setDataPost(response.data);
        console.log(dataPost)
      }).catch(error => {
        console.log(error);
      })
  }

  const peticionGetImagenes = async () => { //Realiza peticiones Get al backend Matriculas
    await axios.get(baseUrlImg)
      .then(response => {
        setImgSeleccionada(response.data);
        console.log(dataPost)
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => { //Hace efecto la peticion
    peticionGet();
    peticionGetImagenes();

  }, [])
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/user.png" alt="" />
            <span className="postUsername">{props.post.correoElectronico}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{props.post.description}</span>
          {((props.post.img).toUpperCase().includes('.PNG') || (props.post.img).toUpperCase().includes('.JPG') || (props.post.img).toUpperCase().includes('.JPGE')) &&

            <img className="postImg" src={`http://localhost:3000/images/${props.post.img}`} />
          }
          {((props.post.img).toUpperCase().includes('.PDF') || (props.post.img).toUpperCase().includes('.DOCX') || (props.post.img).toUpperCase().includes('.TXT')) &&
            <iframe src={`http://localhost:3000/images/${props.post.img}`}></iframe>
          }

          {((props.post.img).toUpperCase().includes('.MP3') || (props.post.img).toUpperCase().includes('.MP4')) &&

            <video src={`http://localhost:3000/images/${props.post.img}`} autoplay muted loop ></video>

          }
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          </div>
          <div className="postBottomLeft" style={{ cursor: "pointer", fontWeight: "bold" }} onClick={()=>abrirCerrarModalComentarios()}>
            <CommentIcon />
            <span className="postCommentText">Comentarios</span>
          </div>
        </div>

        <Modal isOpen={modalComentarios}>
          <ModalHeader>
            Comentarios
          </ModalHeader>
          <ModalBody>
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn-danger" size="sm" onClick={() => abrirCerrarModalComentarios()}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </div>

    </div>
  );
}