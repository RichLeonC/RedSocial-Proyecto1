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


   function handleSubmit(){
     axios.get(baseURl+`/${form.correo}`)
    .then ( response => {
        return response.data;
    }).then (response=> {
            if(response.length>0){
                var respuesta=response[0];
                console.log(respuesta);
            if (respuesta.correo == ("meguilu11@hotmail.com")){
               
            }
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

  




    return(
        <div className='login-container'>
           <Title text = 'Login'/>
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
            <button onClick={handleSubmit}>
                Ingresar
            </button>

        </div>

    )








}
export default Login;