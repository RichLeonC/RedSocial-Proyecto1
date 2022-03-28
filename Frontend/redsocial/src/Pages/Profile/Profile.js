import React,{useState,useEffect, Component} from 'react';
import './profile.css'
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar';
import { Public } from '@mui/icons-material';
import { ModalHeader,Modal,Button,ModalBody,ModalFooter} from 'reactstrap'
import TextField from '@mui/material/TextField'

class Simpletextarea extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
  
    handleChange(event) {
      console.log(event.target.value)
    }
  
    render() {
      return (
        <div>
          <label>Enter value : </label>
          <input type="textarea" 
            name="textValue"
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }


export default function Profile() {
    
    const [modalImagen,setModalImagen] = useState(false); //Estado para el modal imagen
    const [modalInfo,setModalInfo] = useState(false); //Estado para el modal informacion

    const [form,setForm] = useState({
        correo:'',
        nombre:'',
        primApellido:'',
        segApellido:'',
        nacimiento:'',
        intereses:'',
        descGeneral:'',
        hobbies:''
        });
    
    function handleChange (name, value){
        setForm({
            ...form,
            [name]:value
        });
        console.log(form);
        }

    const abrirCerrarModalImagen=()=>{ //Cambia el estado del modal de imagen
        setModalImagen(!modalImagen);
    }

    const abrirCerrarModalInfo=()=>{ //Cambia el estado del modal de informacion
        setModalInfo(!modalInfo);
    }
    

    function infoPersonal(correo, nombre, apellidoUno, apellidoDos, fechaNacimiento, intereses, descripcion, hobbie){
        
        return(
        <div>
            
            <h6>  {"Correo electrónico:"} {correo}</h6> <br></br>
            <h6>  {"Nombre:"} {nombre}</h6> <br></br>
            <h6>  {"Primer apellido:"} {apellidoUno}</h6> <br></br>
            <h6>  {"Segundo apellido:"} {apellidoDos}</h6> <br></br>
            <h6>  {"Fecha de Nacimiento:"} {fechaNacimiento}</h6> <br></br>
            <h6>  {"Intereses:"} {intereses}</h6> <br></br>
            <h6>  {"Descripcion General:"} {descripcion}</h6> <br></br>
            <h6>  {"Hobbies:"} {hobbie}</h6> <br></br>
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
                            Correo Electronico:
                            <input type="text" name="correo" handleChange= {handleChange}/>
                        </label>
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
                        <button className="buton-container">
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
                    <div className="profileRightBottom">
                        
                        
                        <button onClick={()=>abrirCerrarModalImagen()} style={{position:"absolute",left:"63rem",marginTop:"1rem"}} className='btn btn-primary'>
                            Cambiar foto
                            </button>
                            

                        <button onClick={()=>abrirCerrarModalInfo()} style={{position:"absolute",left:"72rem",marginTop:"1rem"}} className='btn btn-warning'>
                            Editar información
                            </button>
                    </div>

                    
                    
                    
                </div>
            </div>

        </div>
        
        

    )
    
    
}



//onClick = {}
//{infoPersonal("adriherrera09", "Adrián", "Herrera", "Segura", "9 de noviembre, 2001", "El cine", "Un chavalo sencillo", "Minecraft")}