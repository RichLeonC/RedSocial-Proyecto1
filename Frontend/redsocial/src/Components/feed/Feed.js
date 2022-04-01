import React,{useState,useEffect} from 'react';
import Post from '../Post/Post.js'
import Share from '../share/Share'
import axios from 'axios';
import Cookies from 'universal-cookie';
import './feed.css'

export default function Feed() {
  const baseUrl = "http://localhost:3000/usuarios";
  const baseUrlPost = "http://localhost:3000/posts/s/d";

  const [dataUsuarios,setDataUsuarios] = useState([]);
  const [dataPost,setDataPost] = useState([]);
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

  const getPosts=()=>{
    let posts=[];
    
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
              <Post post={post}></Post>
            
            )}
            

        </div>
    </div>
  )
}
