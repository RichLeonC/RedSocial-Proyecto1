import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar';
export default function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src="assets/post/1.jpeg"
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src="assets/person/1.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        {/* <Feed />
                        <Rightbar profile /> */}
                        {/* <div style={{position:"absolute",left:"65rem",marginTop:"1rem"}}>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">Privada</option>
                                <option value="2">Publica</option>
                            </select>
                        </div> */}
                        
                        <button style={{position:"absolute",left:"63rem",marginTop:"1rem"}} className='btn btn-primary'>Cambiar foto</button>
                        <button style={{position:"absolute",left:"72rem",marginTop:"1rem"}} className='btn btn-warning'>Editar información</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
