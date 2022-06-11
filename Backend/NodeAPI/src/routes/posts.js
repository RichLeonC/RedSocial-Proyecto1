const express = require('express');
const router = express.Router();

const Post = require("../models/Post");

//GET Post filtrado por correo
router.get("/:correo", async (req, res) => {
  try {
    const post = await Post.find({correoElectronico:req.params.correo});
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get post by ID  localhost:3000/posts/id
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET Post filtrado por alguna llave que no existe para que devuelva todos los posts
//localhost:3000/posts/s/d -> devuelve todos los posts que existen
router.get("/:s/:d", async (req, res) => {
  try {
    const post = await Post.find({s:req.params.s});
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create post localhost:3000/posts
 router.post('/',async(req,res)=>{
     const newPost = new Post(req.body);
     try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
     }catch(error){
         res.status(500).json(error);
     }
})

//PUT localhost:3000/posts/id
router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.correoElectronico === req.body.correoElectronico) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("Post actualizado");
      } else {
        res.status(403).json("Solo puedes modificar tu post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Delete post localhost:3000/posts/id
  router.delete("/:id/:correo", async (req, res) => {
    try {
      const correo = req.params.correo
      const post = await Post.findById(req.params.id);
      if (post.correoElectronico === correo) {
        await post.deleteOne();
        res.status(200).json("Post eliminado");
      } else {
        res.status(403).json("Solo puedes eliminar tu post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;