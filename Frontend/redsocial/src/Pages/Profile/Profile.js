import React,{useState,useEffect, Component} from 'react';
import './profile.css'
import Topbar from '../../Components/topbar/Topbar';
import Feed from '../../Components/feed/Feed';
import Sidebar from '../../Components/sidebar/Sidebar'
import Rightbar from '../../Components/rightbar/Rightbar';
import { Public } from '@mui/icons-material';
import { ModalHeader,Modal,Button,ModalBody,ModalFooter } from 'reactstrap';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Cookies from 'universal-cookie';





export default function Profile() {
    
    const [modalImagen,setModalImagen] = useState(false); //Estado para el modal imagen
    const [modalInfo,setModalInfo] = useState(false); //Estado para el modal informacion

    const BaseURL = "http://localhost:3000/usuarios";
    const correoUno = cookie.get("correoElectronico");

    const [form,setForm] = useState({
        nombre:'',
        primApellido:'',
        segApellido:'',
        nacimiento:'',
        clave:'jacksonWang',
        intereses:'',
        descGeneral:'',
        hobbies:''
        });

    useEffect(() => { //Hace efecto la peticion
        peticionGet();
        ConexionUsuarios();
    
    }, [])

    const cookie = new Cookies();
    const [dataU,setDataU] = useState([]);
    
    
    function handleChange (name, value){
        setForm({
            ...form,
            [name]:value
        });
        console.log(form);
       }

    const peticionGet = async()=>{ //Realiza peticiones Get al backend de los grupos
        await axios.get(BaseURL+`/${"meguilu11@hotmail.com"}`)
        .then(response=>{
            setDataU(response.data);
            console.log(response.data)
         }).catch(error=>{
            console.log(error);
         })
    }

    const abrirCerrarModalImagen=()=>{ //Cambia el estado del modal de imagen
        setModalImagen(!modalImagen);
    }

    const abrirCerrarModalInfo=()=>{ //Cambia el estado del modal de informacion
        setModalInfo(!modalInfo);
    }
    
    const ConexionUsuarios = async() => {
        console.log("aqui")
        await axios.put(BaseURL+`/${"meguilu11@hotmail.com"}`)
        .then(response => {
            var respuesta = response.data;
            var dataAuxiliar = form;
            console.log(response.data)
            console.log(form)
            dataAuxiliar.map(usuario => {if (usuario.correo == "meguilu11@hotmail.com") {
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
        .catch(error => {console.log(error);})
    } 

    function infoPersonal(){
        
        return(
        <div>
            
            <h6>  {"Nombre:"} {dataU.nombre}</h6> <br></br>
            <h6>  {"Primer apellido:"} {dataU.apellido1}</h6> <br></br>
            <h6>  {"Segundo apellido:"} {dataU.apellido2}</h6> <br></br>
            <h6>  {"Fecha de Nacimiento:"} {dataU.fechaNacimiento}</h6> <br></br>
            <h6>  {"Intereses:"} {dataU.intereses}</h6> <br></br>
            <h6>  {"Descripcion General:"} {dataU.descripcionGeneral}</h6> <br></br>
            <h6>  {"Hobbies:"} {dataU.hobbie}</h6> <br></br>
        </div>
        );
    }

    function cambioImagen(nombreImagen){
        return("assets/person/" + nombreImagen + ".jpeg")
    }
    
    return (
        <div>

            <Modal isOpen={modalImagen}>

                <ModalBody>
                    Cambio de imagen     
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-secondary" size="sm" onClick={()=>abrirCerrarModalImagen()}>
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
                            Nombre:
                            <input type="text" name="nombre" handleChange= {handleChange}/>
                        </label>
                        <label>
                            Primer apellido:
                            <input type="text" name="primApellido" handleChange= {handleChange}/>
                        </label>
                        <label>
                            Segundo apellido:
                            <input type="text" name="segApellido" handleChange= {handleChange}/>
                        </label>
                        <label>
                            Fecha de Nacimiento:
                            <input type="text" name="nacimiento" handleChange= {handleChange}/>
                        </label>
                        <label>
                            Intereses:
                            <input type="text" name="intereses" handleChange= {handleChange}/>
                        </label>
                        <label>
                            Descripcion General:
                            <input type="text" name="descGeneral" handleChange= {handleChange}/>
                        </label>
                        <label>
                            Hobbies:
                            <input type="text" name="hobbies" handleChange= {handleChange}/>
                        </label>
                        <button className="buton-container" onClick={ConexionUsuarios}>
                            Ingresar
                        </button>
                        
                    </form>
                    <Button className="btn btn-secondary" size="sm" onClick={()=>abrirCerrarModalInfo()}>
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
                                src="assets/post/1.jpeg"
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src = {cambioImagen(1)}
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Sara Ramirez</h4>
                            <span className="profileInfoDesc">Hola a todos!</span>
                        </div>
                        
                    </div>
                    <br></br>
                    <div className="profileRightBottom">
                        
                    <button onClick={()=>abrirCerrarModalImagen()} >
                            Cambiar foto
                            </button>
                    
                    <button onClick={()=>abrirCerrarModalInfo()} >
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