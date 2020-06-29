import React from 'react'
import {Parallax} from 'react-materialize'
import imgEscritorio from '../imagenes/imagenes/escritorio.jpg'
import imgFotoPerfil  from '../imagenes/imagenes/fotoperfil.jpg'
import pdf from '../curriculum/test.pdf'
function ParallaxImg() {

    return(
  <div>
  <Parallax
    image={<img alt="" src={imgEscritorio}/>}
    options={{
      responsiveThreshold: 0
    }}
  />
  <div className="positionParallaxDescripcion">
  <div class="container">
      <div class="row">
        <div class="col s12 m12 l6  white-text">
          <img class="imagenperfil padreParallaxFoto" src={imgFotoPerfil} />
          

        </div>
        <div class="col s12 m12 l6 black-text padreParallaxDescripcion txtCentro">
          <div>
          <h2 class="titulomovil">Fernando Michea</h2>
          <p class="textoUno">Soy un apasionado del mundo de la programacion, que busca a trav&eacute;s del
             desarrollo web, entregarte el mejor servicio a ti y a tu empresa</p>
          <a href={pdf} target="_blank" title="prueba"  class="btn-large botonEstilo"><i class="material-icons left">get_app</i>CURRICULUM VITAE</a>
          </div>
        </div>
      
        </div>
        </div>
  </div>
  </div>


  
    )
    
}

export default ParallaxImg