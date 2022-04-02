import "./post.css";
import React,{useState,useEffect} from 'react';
import { MoreVert } from "@mui/icons-material";
import axios from 'axios';
import Cookies from 'universal-cookie';
// import { Users } from "../../dummyData";


export default function Post(props) {
  const baseUrl = `http://localhost:3000/posts/r29leonc@gmail.com`
  const baseUrlImg = `http://localhost:3000/images/${props.post.img}`
  const [dataPost, setDataPost] = useState([])

  const [imgSeleccionada,setImgSeleccionada] = useState([]);
  const peticionGet = async()=>{ //Realiza peticiones Get al backend Matriculas
    await axios.get(baseUrl)
    .then(response=>{
        setDataPost(response.data);
        console.log(dataPost)
    }).catch(error=>{
        console.log(error);
    })
  }

  const peticionGetImagenes = async()=>{ //Realiza peticiones Get al backend Matriculas
    await axios.get(baseUrlImg)
    .then(response=>{
        setImgSeleccionada(response.data);
        console.log(dataPost)
    }).catch(error=>{
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
            {/* <img
              className="postProfileImg"
              // src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            /> */}
             <img className="postProfileImg" src="/assets/user.png" alt=""/>

 
            {/* <span className="postUsername"> */}
              {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
            {/* </span> */}
            <span className="postUsername">{props.post.correoElectronico}</span>
            {/* <span className="postDate">{post.date}</span> */}
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          {/* <span className="postText">{post?.desc}</span> */}
          <span className="postText">{props.post.description}</span>
          {/* <img className="postImg" src={post.photo} alt="" /> */}
           <img className="postImg" src={`http://localhost:3000/images/${props.post.img}`}/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
             {/* <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" /> 
            <span className="postLikeCounter">{like} people like it</span> */}
          </div>
          <div className="postBottomLeft">
            {/* <span className="postCommentText">{post.comment} comments</span> */}
            <span className="postCommentText">Comentarios</span>
          </div>
        </div>
      </div>
    </div>
  );
}