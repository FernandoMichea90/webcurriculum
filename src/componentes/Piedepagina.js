import React from 'react'
import {Footer} from 'react-materialize'
import '../estilos/piepagina.css'

function Piedepagina(params) {
    return(

        <Footer
  className="example"
  links={
    
  <ul>
    <li><a className="grey-text text-lighten-3" ><h5>Contacto</h5> </a></li>

    <li><a className="grey-text text-lighten-3" >fmicheam@gmail.com </a></li>
    <li><a className="grey-text text-lighten-3" >+569 7622 6068</a></li></ul>}
  moreLinks={<a className="grey-text text-lighten-4 right" href="#!"></a>}
>
  <h5 className="white-text">
    Redes Sociales
  </h5>
  <p className="grey-text text-lighten-4 footParrafo">

      <ul>
      <li>
        <img height="40" src={require('../redes sociales/github.png')}></img>

        </li>
        <li>
          <img height="40" src={require('../redes sociales/insta.png')}></img>
        </li>
        <li>
        <img height="40" src={require('../redes sociales/face.png')}></img>

        </li>
        <li>
        <img height="40" src={require('../redes sociales/link.png')}></img>

        </li>
        
        
      </ul>


  </p>
</Footer>


    )

}

export default Piedepagina