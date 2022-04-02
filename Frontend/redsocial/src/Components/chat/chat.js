import React,{useState, useEffect} from 'react';
import { auth , db} from '../../Pages/Home/firebase';


function Chat() {
  const [mensajes, setMensajes] = useState([]);


  useEffect(() => {
    db.collection('mensajes').orderBy('ceateAt').limit(50).onSnapshot(snapshot=>
    {
      setMensajes(snapshot.docs.map(doc => doc.data()))
    })


  },[])




  return (
    <div>

    {mensajes.map(({id, text, pho})=> 
    <div key = {id}> 
    
    <p>{text}</p>




    </div>
    )}



    </div>
  )
}

export default Chat