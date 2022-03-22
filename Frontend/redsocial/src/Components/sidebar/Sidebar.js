import "./sidebar.css";
 import {
   RssFeed,
   Chat,
   Logout
 } from '@mui/icons-material';
// import { Users } from "../../dummyData";
// import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
             <RssFeed className="sidebarIcon" /> 
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
             <Logout className="sidebarIcon" />
            <span className="sidebarListItemText">Cerrar sesión</span>
          </li>
        </ul>
      </div>
    </div>
  );
}