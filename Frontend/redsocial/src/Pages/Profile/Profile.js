import React, { useState, useEffect, Component } from 'react';
import './profile.css'
import Topbar from '../../Components/topbar/Topbar';
import Feed from '../../Components/feed/Feed';
import Sidebar from '../../Components/sidebar/Sidebar'
import Rightbar from '../../Components/rightbar/Rightbar';
import { Public } from '@mui/icons-material';
import { ModalHeader, Modal, Button, ModalBody, ModalFooter } from 'reactstrap';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function Profile() {

    const [modalImagen, setModalImagen] = useState(false); //Estado para el modal imagen
    const [modalInfo, setModalInfo] = useState(false); //Estado para el modal informacion
    const cookie = new Cookies();
    const BaseURL = "http://localhost:3000/usuarios";
    const correoUno = cookie.get("correoElectronico");

    const [form, setForm] = useState({
        nombre: '',
        primApellido: '',
        segApellido: '',
        nacimiento: '',
        clave: 'jacksonWang',
        intereses: '',
        descGeneral: '',
        hobbies: ''
    });

    useEffect(() => { //Hace efecto la peticion
        peticionGet();
        ConexionUsuarios();

    }, [])


    const [dataU, setDataU] = useState([]);

    function handleChange(name, value) {
        setForm({
            ...form,
            [name]: value
        });
        console.log(form);
    }

    const peticionGet = async () => { //Realiza peticiones Get al backend de los grupos
        await axios.get(BaseURL + `/${"meguilu11@hotmail.com"}`)
            .then(response => {
                setDataU(response.data);
                console.log(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    const abrirCerrarModalImagen = () => { //Cambia el estado del modal de imagen
        setModalImagen(!modalImagen);
    }

    const abrirCerrarModalInfo = () => { //Cambia el estado del modal de informacion
        setModalInfo(!modalInfo);
    }


    useEffect(() => { //Hace efecto la peticion

        ConexionUsuarios();

    }, [])



    const ConexionUsuarios = async () => {
        console.log("aqui")
        await axios.put(BaseURL + `/${"meguilu11@hotmail.com"}`)
            .then(response => {
                var respuesta = response.data;
                var dataAuxiliar = form;
                console.log(response.data)
                console.log(form)
                dataAuxiliar.map(usuario => {
                    if (usuario.correo == "meguilu11@hotmail.com") {
                        usuario.nombre = respuesta.nombre;
                        usuario.primApellido = respuesta.apellido1;
                        usuario.segApellido = respuesta.apellido2;
                        usuario.fechaNacimiento = respuesta.fechaNacimiento;
                        usuario.clave = respuesta.clave;
                        usuario.intereses = respuesta.intereses;
                        usuario.descGeneral = respuesta.descripcionGeneral;
                        usuario.hobbies = respuesta.hobbies;
                    }
                });

                console.log(respuesta);
                console.log(dataAuxiliar);
            })
            .catch(error => { console.log(error); })
    }

    function infoPersonal() {

        return (
            <div>
                <table class="table" style={{margin: '10rem'}}>
                    <thead>
                        <tr>
                            <th scope="col">Fecha de Nacimiento</th>
                            <th scope="col">Intereses</th>
                            <th scope="col">Descripcion General</th>
                            <th scope="col">Hobbies</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            
                            <td>{dataU.fechaNacimiento}</td>
                            <td>{dataU.intereses}</td>
                            <td>{dataU.descripcionGeneral}</td>
                            <td>{dataU.hobbies}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    function cambioImagen(nombreImagen) {
        return ("assets/" + nombreImagen)
    }

    return (
        <div>

            <Modal isOpen={modalImagen}>

                <ModalBody>
                    Cambio de imagen
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-secondary" size="sm" onClick={() => abrirCerrarModalImagen()}>
                        No
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalInfo}>

                <ModalBody>
                    Cambio de informacion
                </ModalBody>
                <ModalFooter>
                    <h6>Digite su nueva informacion:</h6>
                    <form>
                        <label>
                            Fecha de Nacimiento:
                            <input type="text" name="nacimiento" handleChange={handleChange} />
                        </label>
                        <label>
                            Intereses:
                            <input type="text" name="intereses" handleChange={handleChange} />
                        </label>
                        <label>
                            Descripcion General:
                            <input type="text" name="descGeneral" handleChange={handleChange} />
                        </label>
                        <label>
                            Hobbies:
                            <input type="text" name="hobbies" handleChange={handleChange} />
                        </label>
                        <button className="buton-container" onClick={ConexionUsuarios}>
                            Ingresar
                        </button>

                    </form>
                    <Button className="btn btn-secondary" size="sm" onClick={() => abrirCerrarModalInfo()}>
                        No
                    </Button>
                </ModalFooter>
            </Modal>

            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src="assets/paisaje.jpg"
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={cambioImagen("user.png")}
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{dataU.nombre + ' ' + dataU.apellido1 + ' ' + dataU.apellido2}</h4>
                            <span className="profileInfoDesc">Hola a todos!</span>
                        </div>

                    </div>
                    <br></br>
                    <div className="profileRightBottom">

                        <button className='btn btn-primary' style={{ height: '50px', margin: '1rem', position: 'absolute', bottom: '5rem', left: '55rem' }} onClick={() => abrirCerrarModalImagen()} >
                            Cambiar foto
                        </button>

                        <button className='btn btn-primary' style={{ height: '50px', margin: '1rem', position: 'absolute', bottom: '5rem', right: '30rem' }} onClick={() => abrirCerrarModalInfo()} >
                            Editar información
                        </button>

                        {infoPersonal()}


                    </div>

                </div>
            </div>

        </div>



    )


}



//
//{infoPersonal("adriherrera09", "Adrián", "Herrera", "Segura", "9 de noviembre, 2001", "El cine", "Un chavalo sencillo", "Minecraft")}