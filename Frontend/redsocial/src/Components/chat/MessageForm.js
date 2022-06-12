import React from "react";
import Attachment from "../svg/Attachment";

const MessageForm = () =>{
    return(
        <form  className="message_form">
            <label htmlFor="img">
                <Attachment/>
            </label>
            <input type='file' 
            id= 'img' 
            accept="image/*"
            style={{ display: 'none'}}/>
            <div>
                <input type='text' placeholder="Enter message" />
            </div>
            <div>
                <button className="btn">Enviar</button>
            </div>
        </form>
        
    );
};

export default MessageForm;