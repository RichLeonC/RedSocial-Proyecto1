import React,{Component,useState} from 'react';
import Title from './Components/Title/Title';
import './Login.css';
import Label from './Components/label/label';
import Input from './Components/Input/Input';
import axios from 'axios';
import {auth , db} from "../Pages/Home/firebase.js";
import Cookies from 'universal-cookie';
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";


function Login (props){
  
    const baseURl = "http://localhost:3000/usuarios";
    const [form,setForm] = useState({
        correoElectronico:'',
        clave:''
        });
    const cookies = new Cookies();
    const [dataU1,setDataU] = useState([]);


   function handleChange (name, value){
    setForm({
        ...form,
        [name]:value
    });
    console.log(form);
   }


   const handleSubmit=async()=>{
    const result = await signInWithEmailAndPassword(auth, 
        form.correoElectronico, 
        form.clave);

    await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
        });
       
   //const result  = await signInWithEmailAndPassword(auth, form.correo, form.clave);
   // console.log(result)
   // await axios.get(baseURl+`/${form.correo}/${form.clave}`)
    await axios.get(baseURl+`/${form.correoElectronico}/${form.clave}`)
    .then ( response => {
        //setDataU([]);
        setDataU(response.data);
       console.log("responde: "+response.data.correoElectronico)
        return response.data;
    }).then (response=> {
          //console.log(response.data.correoElectronico)
            if(1<2){
                var dataU=response;
                console.log("Correo:" + dataU.correoElectronico);
                console.log('captura información')
                cookies.set("correoElectronico",dataU.correoElectronico,{path:"/"});
                cookies.set("nombre",dataU.nombre,{path:"/"});
                cookies.set("apellido1",dataU.apellido1,{path:"/"});
                cookies.set("apellido2",dataU.apellido2,{path:"/"});
                cookies.set("fechaNacimiento",dataU.fechaNacimiento,{path:"/"});
                cookies.set("clave",dataU.clave,{path:"/"});
                cookies.set("intereses",dataU.intereses,{path:"/"});
                cookies.set("descripcionGeneral",dataU.descripcionGeneral,{path:"/"});
                cookies.set("hobbies",dataU.hobbies,{path:"/"});
                alert("Bienvenido: "+dataU.nombre+" "+dataU.apellido1)
                props.history.push("/Home");
               
            
            }
            else{
                alert("El usuario o contraseña no son correctos e");
            }
         
        }
    )
    .catch(error=>{
        alert("El usuario o contraseña no son correctos c");
        console.log(error);
    })

    console.log(form)
  
   }

  function Navegar (){
    props.history.push("/Register");


  }

    return(
        <div className='fondo'>
            <br></br>
       
        <div className='login-container'>
           <Title text = 'Login'/>
           <br></br>
            <Label text = 'Usuario'/>
            <Input
            attribute={{
                id: 'correo',
                name: 'correoElectronico',
                type : 'text',
                placeholder: 'Ingrese correo'
            }}
            handleChange= {handleChange}
            />
            <br></br>
            <Label text = 'Contraseña'/>
            <Input
            attribute={{
                id: 'clave',
                name: 'clave',
                type : 'password',
                placeholder: 'Ingrese contraseña'
            }}
            handleChange= {handleChange}
            />
            <br></br>
            <button className="buton-container" onClick={handleSubmit}>
                Ingresar
            </button>
            <br></br>
           
            <button className="SignUp-Container" onClick={Navegar}>
                Sign Up
            </button>
        </div>
        </div>
    )








}
export default Login;