import React,{Component,useState} from 'react';
import Title from './Components/Title/Title';
import './Login.css';
import Label from './Components/label/label';
import Input from './Components/Input/Input';

function Login (props){
    const [email, setemail] = useState('');
    const [clave, setclave] = useState('');

   function handleChange (name, value){
       if (name === 'correo'){
           setemail(value)
       }
       else {
            setclave(value)

       }
   }
   function handleSubmit(){
    let accout = {email, clave}
    if (accout){
        console.log(accout)
    }


   }

   console.log('correo', email)
   console.log('clave', clave)

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