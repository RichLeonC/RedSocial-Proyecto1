import React,{Component,useState} from 'react';
import Title from './Components/Title/Title';
import './Login.css';
import Label from './Components/label/label';
import Input from './Components/Input/Input';
import axios from 'axios';
import Cookies from 'universal-cookie';

//import saltHash from 'password-salt-and-hash';

function Login (props){
  
    const baseURl = "http://localhost:3000/usuarios";
    const [form,setForm] = useState({
        correo:'',
        clave:''
        });
    const cookies = new Cookies();
   function handleChange (name, value){
    setForm({
        ...form,
        [name]:value
    });
    console.log(form);
   }


   const handleSubmit=async()=>{
    await axios.get(baseURl+`/${form.correo}`)
    .then ( response => {
        return response.data;
    }).then (response=> {
            if(response.length>0){
                var respuesta=response[0];
                console.log(respuesta);
                cookies.set("correoElectronico",respuesta.correoElectronico,{path:"/"});
                cookies.set("nombre",respuesta.nombre,{path:"/"});
                cookies.set("apellido1",respuesta.apellido1,{path:"/"});
                cookies.set("apellido2",respuesta.apellido2,{path:"/"});
                cookies.set("fechaNacimiento",respuesta.fechaNacimiento,{path:"/"});
                cookies.set("clave",respuesta.clave,{path:"/"});
                cookies.set("intereses",respuesta.intereses,{path:"/"});
                cookies.set("descripcionGeneral",respuesta.descripcionGeneral,{path:"/"});
                cookies.set("hobbies",respuesta.hobbies,{path:"/"});
                props.history.push("/Home");
               
            
            }
            else{
                alert("El usuario o contraseña no son correctos");
            }
        }
    )
    .catch(error=>{
        alert("El usuario o contraseña no son correctos");
        console.log(error);
    })

    console.log(form)
  
   }

  
    return(
        <div className='login-container'>
           <Title text = 'Login'/>
           <br></br>
            <Label text = 'Usuario'/>
            <Input
            attribute={{
                id: 'correo',
                name: 'correo',
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

        </div>

    )








}
export default Login;