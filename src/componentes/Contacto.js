import React ,{useState} from 'react'
import {TextInput,Button,Icon} from 'react-materialize'
import Swal from 'sweetalert2'

import '../estilos/contacto.css'
import clienteAxios from '../config/axios'
function Contacto(props)
{

console.log(process.env.REACT_APP_BACKEND_URL);

const [contacto,guardarContacto]=useState({});





const actualizarDatos=e=>
{

guardarContacto(
    {
        ...contacto,[e.target.name]:e.target.value

    })

}


const mandarCorreo=async e=>
{
    e.preventDefault();



    try {



        console.log("mostar contactp "+contacto);
        console.log(contacto);
        
        const respuesta=await clienteAxios.post('/gmail',contacto)
        console.log(respuesta);
        Swal.fire(
            'Exito!',
            'Correo enviado',
            'success'
    
        )
        
    } catch (error) {
        
        Swal.fire(
            'Error!',
            'Correo no enviado',
            'success'
    
        )
        console.log(error);
        
    }

    


}






return (

    <div className="container">
    <div className="row">

<form onSubmit={mandarCorreo}>
        <div className="col s12 textoCentro titulos">
                Contacto
        </div>

        <div className="col s12">
              <TextInput
                icon="assignment_returned"
                className="todoelancho"
                name="asunto"
                label="Asunto"
                onChange={actualizarDatos}

              />
        </div>

        <div className="col s12">
        <TextInput
                icon="email"
                label="Email"
                name="email"
                onChange={actualizarDatos}

              />

        </div>
        <div className="col s12">
        <TextInput
                icon="edit"
                label="Consulta"
                name="consulta"
                onChange={actualizarDatos}

              />

        </div>
        <div className="col s12">
            <Button
                className="aladerecha btn-large botonEstilo"
                node="button"
                type="submit"
                waves="light"
                >
                Enviar
                <Icon right>
                    send
                </Icon>
            </Button>
        </div>
        </form>
    </div>

    </div>
)

}

export default Contacto