import React from 'react'
import Post from '../Post/Post.js'
import Share from '../share/Share'
import './feed.css'

export default function Feed() {
  return (
    <div className='feed'>
        <div className='feedWrapper'>
            <Share></Share>
             <Post></Post> 
             <Post></Post> 
             <Post></Post> 
        </div>
    </div>
  )
}
