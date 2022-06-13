import React, { useState, useEffect, Component, useRef } from 'react';
import './profile.css'
import Topbar from '../../Components/topbar/Topbar';
import Feed from '../../Components/feed/Feed';
import Sidebar from '../../Components/sidebar/Sidebar'
import Rightbar from '../../Components/rightbar/Rightbar';
import { Public } from '@mui/icons-material';
import { ModalHeader, Modal, Button, ModalBody, ModalFooter } from 'reactstrap';

import axios from 'axios';
import Cookies from 'universal-cookie';
import moment from 'moment';

export default function Profile() {

    const [modalImagen, setModalImagen] = useState(false); //Estado para el modal imagen
    const [modalInfo, setModalInfo] = useState(false); //Estado para el modal informacion
    const [modalExito, setModalExito] = useState(false);

    const cookie = new Cookies();
    const BaseURL = "http://localhost:3000/usuarios";
    const fechaNacimiento = useRef();
    const intereses = useRef();
    const descripcionGeneral = useRef();
    const hobbies = useRef();

    const [form, setForm] = useState({
        nombre: cookie.get("nombre"),
        apellido1: cookie.get("apellido1"),
        apellido2: cookie.get("apellido2"),
        fechaNacimiento: '',
        clave: cookie.get('clave'),
        intereses: '',
        descripcionGeneral: '',
        hobbies: ''
    });

    const [dataU, setDataU] = useState([]);

    function handleChange(e) {
        const{name,value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const peticionGet = async () => { //Realiza peticiones Get al backend de los grupos
        await axios.get(BaseURL + `/${cookie.get('correoElectronico')}`)
            .then(response => {
                setDataU(response.data);
                // console.log(response.data)
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




    const ConexionUsuarios = async () => {

        dataU.fechaNacimiento = moment(dataU.fechaNacimiento).utc().format('YYYY-MM-DD');
        console.log("FORM: " + JSON.stringify(form));
        await axios.put(BaseURL + `/${cookie.get('correoElectronico')}`, form)
            .then(response => {
                console.log('Usuario modificado')

            })
            .catch(error => { console.log(error); })
    }

    const abrirCerrarModalExito = () => {
        if (modalInfo) {
            abrirCerrarModalInfo();
        }
        ConexionUsuarios();
        peticionGet();
        setModalExito(!modalExito);



    }


    useEffect(() => { //Hace efecto la peticion
        peticionGet();
    }, [])

    function infoPersonal() {
        //var fechaNacimientoString = dataU.fechaNacimiento.toString();
        //fechaNacimientoString.slice(0,10)
        return (
            <div>
                <table class="table" style={{ margin: '1rem 8rem' }}>
                    <thead>
                        <tr>
                            <th scope="col">Fecha de Nacimiento</th>
                            <th scope="col">Intereses</th>
                            <th scope="col">Descripcion General</th>
                            <th scope="col">Hobbies</th>
                            <th scope="col">Correo Electronico</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>

                            <td>{moment(dataU.fechaNacimiento).utc().format('YYYY-MM-DD')}</td>
                            <td>{dataU.intereses}</td>
                            <td>{dataU.descripcionGeneral}</td>
                            <td>{dataU.hobbies}</td>
                            <td>{dataU.correoElectronico}</td>
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

                    <form>
                        <label>
                            <input type="text" name="imagen" />
                        </label>
                        <input type="submit" value="Submit" />
                        <Button className="btn btn-secondary" size="sm" onClick={() => cambioImagen('fotoPerfil.jpg')}>
                            Listo
                        </Button>

                        <Button className="btn btn-secondary" size="sm" onClick={() => abrirCerrarModalImagen()}>
                            No
                        </Button>
                    </form>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalExito}>

                <ModalBody>
                    Cambio exitoso
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-primary' onClick={() => abrirCerrarModalExito()}>Cerrar</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalInfo}>
                <ModalHeader>Editar informacion</ModalHeader>
                <ModalBody>

                    <input className='form-control' placeholder='Fecha de nacimiento'type="text" name="fechaNacimiento" onChange={handleChange}/>
                    <input className='form-control' placeholder='Intereses' type="text" name="intereses"  onChange={handleChange} />
                    <input className='form-control'  placeholder='Descripción General'type="text" name="descripcionGeneral"  onChange={handleChange} />
                    <input className='form-control' placeholder='Hobbies' type="text" name="hobbies"  onChange={handleChange} />
                </ModalBody>
                <ModalFooter>
                    <button className="buton-container" onClick={() => abrirCerrarModalExito()}>
                        Ingresar
                    </button>

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
