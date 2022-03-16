import "./post.css";
import { MoreVert } from "@mui/icons-material";
// import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {

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
             <img className="postProfileImg" src="/assets/person/1.jpeg" alt=""/>

 
            {/* <span className="postUsername"> */}
              {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
            {/* </span> */}
            <span className="postUsername">Carlita Mora</span>
            {/* <span className="postDate">{post.date}</span> */}
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          {/* <span className="postText">{post?.desc}</span> */}
          <span className="postText">Mi primera publicacion</span>
          {/* <img className="postImg" src={post.photo} alt="" /> */}
           <img className="postImg" src="/assets/post/1.jpeg"/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
             {/* <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" /> 
            <span className="postLikeCounter">{like} people like it</span> */}
          </div>
          <div className="postBottomRight">
            {/* <span className="postCommentText">{post.comment} comments</span> */}
            <button type="button" className="btn btn-warning postCommentText">Comentarios</button>
          </div>
        </div>
      </div>
    </div>
  );
}