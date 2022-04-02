import React,{useState,useEffect} from 'react';
import Post from '../Post/Post.js'
import Share from '../share/Share'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ModalHeader,Modal,ModalBody,Button,Form,Select,ModalFooter} from 'reactstrap'
import './feed.css'

export default function Feed() {
  const baseUrl = "http://localhost:3000/usuarios";
  const baseUrlPost = "http://localhost:3000/posts/s/d";
  const baseUrlPost2 = "http://localhost:3000/posts";
  const [dataUsuarios,setDataUsuarios] = useState([]);
  const [dataPost,setDataPost] = useState([]);
  const [postSeleccionado,setPostSeleccionado] = useState([]);
  const [modalEliminar,setModalEliminar] = useState(false);
  const cookies = new Cookies();
  const abrirCerrarModalEliminar=()=>{ //Cambia el estado del modal de eliminar(abierto o cerrado)
      
    setModalEliminar(!modalEliminar);
    

}


  const peticionGet = async()=>{ //Realiza peticiones Get al backend Matriculas
    await axios.get(baseUrl)
    .then(response=>{
        setDataUsuarios(response.data);
    }).catch(error=>{
        console.log(error);
    })
  }

  const peticionGetPosts = async()=>{ //Realiza peticiones Get al backend Matriculas
    await axios.get(baseUrlPost)
    .then(response=>{
        setDataPost(response.data);
    }).catch(error=>{
        console.log(error);
    })
  }

  const peticionDelete=async()=>{
    console.log(postSeleccionado);
    await axios.delete(baseUrlPost2+"/"+postSeleccionado._id+"/"+cookies.get("correoElectronico"))
    .then(response=>{
        setDataPost(dataPost.filter(post=>post.id!==response.data)); //Guarda en el estado, los que no se eliminaron
        abrirCerrarModalEliminar();
        window.location.reload();
    }).catch(error=>{
        console.log(error);
        
    })
}

  const seleccionarPost=(post)=>{
    setPostSeleccionado(post);
    if(post.correoElectronico!=cookies.get("correoElectronico")){
      alert("El post no es tuyo")
    }
    else{
      abrirCerrarModalEliminar();
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
            dataPost.map(post=>
              <div>
              <Post post={post}></Post>
              <button className='btn btn-danger' onClick={()=>seleccionarPost(post)}>Eliminar</button>
              </div>
            )}
            

        </div>
        <Modal isOpen={modalEliminar}>

                <ModalBody>
                   ¿Estás seguro que deseas eliminar este post?     
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-danger"size="sm" onClick={()=>peticionDelete()}>Sí</Button>
                    <Button className="btn btn-secondary" size="sm" onClick={()=>abrirCerrarModalEliminar()}
                    >No</Button>
                </ModalFooter>
            </Modal>
    </div>
  )
}
