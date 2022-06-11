import React, { useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../Pages/Home/firebase";

const User = ({user , selectUser})=>{
    return(
        <div className="user_wrapper" onClick={() =>selectUser(user)}>
            <div className="user_info">
                <div className="user_detail">
                    <h4>{user.form3}</h4>
                </div>
             <div className={`"user-status" ${user.isOnline? 'online':'offline'}`}></div>   

            </div>

        </div>
        


    );


};

export default User;