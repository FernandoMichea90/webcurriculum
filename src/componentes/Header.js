import React from 'react'

import '../estilos/header.css'
import {Navbar,Icon,NavItem} from 'react-materialize'
function Header() {

  //  camibiar color de navbar 
  window.onscroll = function() {
    var y = window.scrollY;
    if(y>71)
    {
        document.getElementById("nave").className = "navbarEstilos";
    }else
    {
        document.getElementById("nave").className = "colorTransparente";
    
    }
    };



    
    return(

      <div class="navbar-fixed">
    <nav id="nave" class="colorTransparente">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">FM</a>
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#portafolio">Portafolio</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
</div>
    )
}

export default Header;