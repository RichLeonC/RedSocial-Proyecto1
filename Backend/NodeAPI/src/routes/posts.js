const express = require('express');
const router = express.Router();

const Post = require("../models/Post");

//Create post
 router.post('/',async(req,res)=>{
     const newPost = new Post(req.body);
     try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
     }catch(error){
         res.status(500).json(error);
     }
})

module.exports = router;