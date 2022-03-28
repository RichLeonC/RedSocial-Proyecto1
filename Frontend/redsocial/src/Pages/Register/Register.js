import React, {Component} from "react"
import axios from 'axios'
import "./register.css"



  class Register extends Component{
    constructor(props) {
      super(props)
      this.state = {
        correoElectronico: '',
        nombre: '',
        apellido1: '',
        apellido2: '',
        fechaNacimiento: '',
        clave: '',
        intereses: '',
        descripcionGeneral: '',
        hobbies: '',
      }
    }

    changeHandler = e => {
      this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
      e.preventDefault()
      console.log(this.state)
      axios.post('http://localhost:3000/usuarios', this.state)
    
        .then(response => {
          console.log(response)
          console.log("me salte todo 1")
          
        })
        .catch(error => {
          console.log(error)
        })
        console.log("me salte todo")
    }

 

  //export default function Register() {
    render() {
      const {correoElectronico, nombre, apellido1, apellido2, fechaNacimiento,
        clave, intereses, descripcionGeneral, hobbies} = this.state

     

 
      return (
        <form onSubmit={this.submitHandler}>
          <div className="login">
            <div classname="loginWrapper">
              <div className="loginLeft">
                <h3 className="loginLogo">Kompusocial</h3>
                <span className="subTitle">
                  ¡Conéctate con tus amigos digitalmente!
                </span>
              </div>
              <div className="loginRight">
                <div className="loginBox">
                  <input placeholder="Correo Electrónico" className="loginOutput"
                    name="correoElectronico" value={correoElectronico} onChange={this.changeHandler}>
                  </input>
                  <input placeholder="Nombre" className="loginOutput"
                    name="nombre" value={nombre} onChange={this.changeHandler}>
                  </input>
                  <input placeholder="Apellido 1" className="loginOutput"
                    name="apellido1" value={apellido1} onChange={this.changeHandler}>
                  </input>
                  <input placeholder="Apellido 2" className="loginOutput"
                    name="apellido2" value={apellido2} onChange={this.changeHandler}>
                  </input>
                  <input placeholder="Fecha de nacimiento" className="loginOutput"
                    name="fechaNacimiento" value={fechaNacimiento} onChange={this.changeHandler}>
                  </input>
                  <input placeholder="Contraseña" className="loginOutput"
                    name="password" value={password} onChange={this.changeHandler}>
                  </input>
                  <input placeholder="Intereses" className="loginOutput"
                    name="intereses" value={intereses} onChange={this.changeHandler}>
                  </input>
                  <input placeholder="Descripción general" className="loginOutput"
                    name="descripcionGeneral" value={descripcionGeneral} onChange={this.changeHandler}>
                  </input>
                  <input placeholder="Hobbies" className="loginOutput"
                    name="hobbies" value={hobbies} onChange={this.changeHandler}>
                  </input>
                  <button type="submit" className="loginButton" >Sign up</button>
                 
                  <button type="submit" className="loginRegisterButton"  >
                    Log into account
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </form>
      )
    }
  }

export default Register

