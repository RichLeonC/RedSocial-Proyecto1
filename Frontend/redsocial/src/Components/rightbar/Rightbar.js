import React from 'react'
import './rightbar.css'
import Chat from '../chat/Chat';


export default function Rightbar() {
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
    <Chat></Chat>
    </div>
  </div>
  )
}
