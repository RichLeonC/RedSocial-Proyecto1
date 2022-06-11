import React, { useState, useEffect, useRef } from 'react';
import Post from '../Post/Post.js'
import Share from '../share/Share'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ModalHeader, Modal, ModalBody, Button, Form, Select, ModalFooter } from 'reactstrap'
import { PermMedia } from '@mui/icons-material'
import './feed.css'

export default function Feed() {
  const baseUrl = "http://localhost:3000/usuarios";
  const baseUrlPost = "http://localhost:3000/posts/s/d";
  const baseUrlPost2 = "http://localhost:3000/posts";
  const [dataUsuarios, setDataUsuarios] = useState([]);
  const [dataPost, setDataPost] = useState([]);
  const [postSeleccionado, setPostSeleccionado] = useState([]);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalEdicion, setModalEdicion] = useState(false);
  const [files,setFiles] = useState([]);
  const cookies = new Cookies();

  const description = useRef();
  const abrirCerrarModalEliminar = () => { //Cambia el estado del modal de eliminar(abierto o cerrado)

    setModalEliminar(!modalEliminar);


  }

  const abrirCerrarModalEdicion = () => {
    setModalEdicion(!modalEdicion);
  }


  const peticionGet = async () => { //Realiza peticiones Get al backend Matriculas
    await axios.get(baseUrl)
      .then(response => {
        setDataUsuarios(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const peticionGetPosts = async () => { //Realiza peticiones Get al backend Matriculas
    await axios.get(baseUrlPost)
      .then(response => {
        setDataPost(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const peticionDelete = async () => {
    console.log(postSeleccionado);
    await axios.delete(baseUrlPost2 + "/" + postSeleccionado._id + "/" + cookies.get("correoElectronico"))
      .then(response => {
        setDataPost(dataPost.filter(post => post.id !== response.data)); //Guarda en el estado, los que no se eliminaron
        abrirCerrarModalEliminar();
        window.location.reload();
      }).catch(error => {
        console.log(error);

      })
  }

  const seleccionarPost = (post, indicador) => {
    setPostSeleccionado(post);
    if (post.correoElectronico != cookies.get("correoElectronico")) {
      alert("El post no es tuyo")
    }
    else if (indicador == 2) {
      abrirCerrarModalEdicion();
    }
    else {
      abrirCerrarModalEliminar();
    }


  }

  const submitHandler=async(e)=>{
    e.preventDefault();
    const newPost ={
      correoElectronico:postSeleccionado.correoElectronico,
      description: description.current.value
    }
    if(files){
      console.log('entro: '+files)
      const data = new FormData();
      const fileName = files.name;
      data.append("file",files)
      data.append("name",fileName);
      console.log('archivo:'+fileName);
      newPost.img = fileName;
      try{
        await axios.post("http://localhost:3000/upload",data);
      }catch(error){
        console.log(error);
      }
    }
    try{
      await axios.put(`http://localhost:3000/posts/${postSeleccionado._id}`,newPost)
      window.location.reload();
    }catch(error){

    }
  }

  useEffect(() => { //Hace efecto la peticion
    peticionGet();
    peticionGetPosts();

  }, [])


  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share></Share>
        {
          dataPost.map(post =>
            <div>
              <Post post={post}></Post>
              <button className='btn btn-danger' onClick={() => seleccionarPost(post, 1)}>Eliminar</button>
              <button className='btn btn-warning m-2' onClick={() => seleccionarPost(post, 2)} >Editar</button>

            </div>
          )}


      </div>
      <Modal isOpen={modalEliminar}>

        <ModalBody>
          ¿Estás seguro que deseas eliminar este post?
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-danger" size="sm" onClick={() => peticionDelete()}>Sí</Button>
          <Button className="btn btn-secondary" size="sm" onClick={() => abrirCerrarModalEliminar()}
          >No</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEdicion}>
        <ModalHeader>Editar Post</ModalHeader>

        <ModalBody>
          
            <input className='form-control' placeholder='Descripción'  ref={description}/>
           
            <label htmlFor="file" className="shareOption mt-3">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Foto o Video</span>
              <input style={{"display":"none"}}type="file" id="file2" accept=".png,.jpeg,.jpg,.pdf,.mp4,.mp3,.txt,.docx" onChange={(e)=>setFiles(e.target.files[0])}/>
            </label>
            
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-warning" size="sm" type='submit' onClick={submitHandler}>Confirmar</Button>
          <Button className="btn btn-secondary" size="sm" onClick={() => abrirCerrarModalEdicion()}
          >Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
