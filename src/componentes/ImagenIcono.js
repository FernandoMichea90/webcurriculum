import React from 'react'
import js from '../imagenes/imagenes/iconos/js.png'
import '../estilos/imgicon.css'
//imagenes 

import css from '../imagenes/imagenes/iconos/css.png'
import java from '../imagenes/imagenes/iconos/java.jpg'
import materialize from '../imagenes/imagenes/iconos/materialize.png'
import mysql from '../imagenes/imagenes/iconos/mysql.png'
import primefaces from '../imagenes/imagenes/iconos/primefaces.png'
import react from '../imagenes/imagenes/iconos/react.png'



function ImagenIcono(props)
{


    console.log("este es el props");
    console.log(props.imagen);
    
    
return(
    <div className="imgIconmargen">
     <img src={require(`../imagenes/imagenes/iconos/${props.imagen}.png`)} height='180' width='200'>
        </img>
    </div>

)

}

export default ImagenIcono