import React, { useEffect } from 'react'
import {SideNav,Button,Icon,SideNavItem}from 'react-materialize'
import M from "materialize-css/dist/js/materialize.min.js";
import '../estilos/barralateral.css'
import imgFotoPerfil  from '../imagenes/imagenes/fotoperfil.jpg'

function Barralateral() {



  useEffect(()=>
  {

    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});



  },[])
    
    return(
     < ul id="slide-out" class="sidenav">
      <li><div class="user-view">
        <div class="background">
          <img src="https://placeimg.com/640/480/tech"/>
        </div>
        <a href="#user"><img class="circle" src={imgFotoPerfil}/></a>
        <a href="#name"><span class="white-text name">Fernando Michea</span></a>
        <a href="#email"><span class="white-text email">fmicheam@gmail.com</span></a>
      </div></li>
      <li><a href="#habilidades"><i class="material-icons">build</i>Habilidades</a></li>
      <li><a href="#portafolio"><i class="material-icons">chrome_reader_mode</i>Portafolio</a></li>
      <li><a href="#contacto"><i class="material-icons">alternate_email</i>Contacto</a></li>

     
      <li><div class="divider"></div></li>
      <li><a class="subheader"><h5>Redes Sociales</h5></a></li>
      <li className="floatDerecha">
        <img height="40" src={require('../redes sociales/github.png')}></img>

        </li>

        <li className="floatDerecha">
          <img height="40" src={require('../redes sociales/insta.png')}></img>
        </li>
        <li className="floatDerecha">
        <img height="40" src={require('../redes sociales/face.png')}></img>

        </li>
        <li className="floatDerecha">
        <img height="40" src={require('../redes sociales/link.png')}></img>

        </li>
        


    </ul>
          
    )
}

export default Barralateral