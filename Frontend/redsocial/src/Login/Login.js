import React,{Component,useState} from 'react';
import Title from './Components/Title/Title';
import './Login.css';
import Label from './Components/label/label';
import Input from './Components/Input/Input';
import axios from 'axios';
import Cookies from 'universal-cookie';
//import saltHash from 'password-salt-and-hash'

function Login (props){
  
    const baseURl = "http://localhost:3000/usuarios";
    const [form,setForm] = useState({
        correo:'',
        clave:''
        });
    const cookies = new Cookies();
    const [dataU,setDataU] = useState([]);


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
        setDataU(response.data);
        return response.data;
    }).then (dataU=> {
        console.log(dataU)
            if(!dataU.empty){
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
                props.history.push("/Home");
               
            
            }
            else{
                alert("El usuario o contraseña no son correctoss");
            }
         
        }
    )
    .catch(error=>{
        alert("El usuario o contraseña no son correctoss");
        console.log(error);
    })

    console.log(form)
  
   }

  function Navegar (){
    props.history.push("/Register");


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
            <br></br>
           
            <button className="SignUp-Container" onClick={Navegar}>
                Sign Up
            </button>
        </div>

    )








}
export default Login;