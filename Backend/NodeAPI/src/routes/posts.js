const express = require('express');
const router = express.Router();

const Post = require("../models/Post");

//Get post
router.get('/',async(req,res)=>{
    console.log("get post");
})

//Create post
 router.post('/',async(req,res)=>{
     const newPost = new Post(req.body);
     try{
         console.log(newPost);
        const savedPost = await newPost.save();
        console.log('pase el savedPost')
        res.status(200).json(savedPost);
     }catch(error){
         res.status(500).json(error);
     }
})

module.exports = router;