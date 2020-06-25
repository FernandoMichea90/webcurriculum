import React ,{useState} from 'react'
import {TextInput,Button,Icon} from 'react-materialize'
import Swal from 'sweetalert2'

import clienteAxios from '../config/axios'
function Contacto(props)
{


const [contacto,guardarContacto]=useState({});





const prueba=async e=>
{
    console.log("lo aprete");
    
    e.preventDefault();
    try {
        
        const respuesta =await clienteAxios.get('/')


}catch(error){
console.log(error);

}

}

const actualizarDatos=e=>
{

guardarContacto(
    {
        ...contacto,[e.target.name]:e.target.value

    })

}


const mandarCorreo=e=>
{
    e.preventDefault();

    Swal.fire(
        'Exito!',
        'Correo enviado',
        'success'

    )


}






return (
    <div className="row">

<form onSubmit={mandarCorreo}>
        <div className="col s12">
                Contacto
        </div>

        <div className="col s12">
              <TextInput
                icon="email"
                id="TextInput-4"
                name="asunto"
                label="Asunto"
                onChange={actualizarDatos}

              />
        </div>

        <div className="col s12">
        <TextInput
                icon="email"
                id="TextInput-4"
                label="Email"
                name="email"
                onChange={actualizarDatos}

              />

        </div>
        <div className="col s12">
        <TextInput
                icon="email"
                id="TextInput-4"
                label="Consulta"
                name="consulta"
                onChange={actualizarDatos}

              />

        </div>
        <div className="col s12">
            <Button
                node="button"
                type="submit"
                waves="light"
                >
                Submit
                <Icon right>
                    send
                </Icon>
            </Button>
        </div>
        </form>
    </div>


)

}

export default Contacto