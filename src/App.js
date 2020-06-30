import React,{useEffect} from 'react';
import Header from './componentes/Header'
import Barralateral from './componentes/Barralateral'
import Piedepagina from './componentes/Piedepagina'
import ParalaxImg from './componentes/ParrallaxImg'
import M from  'materialize-css/dist/js/materialize.min.js'
import 'materialize-css';
import ImgIcon from './componentes/ImagenIcono'
import Tarjeta from './componentes/Tarjeta'
import Contacto from './componentes/Contacto'
import './estilos/principal.css'

function App() {


  useEffect(() => {
    var sidenav = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(sidenav, {});
  }, []);
  
  return (
    <div>
    <Header></Header>
    <Barralateral></Barralateral>
    <ParalaxImg></ParalaxImg>
    

    <div className="container">
    <div class="row">
     
    </div>
    <div id="habilidades" class="row">
          <div class="col s12 txtCentro titulos"><p>Habilidades</p></div>
          <div class="col s12 m4 l4"><p><ImgIcon  imagen="css"></ImgIcon></p></div>
          <div class="col s12 m4 l4"><p><ImgIcon  imagen="java"></ImgIcon></p></div>
          <div class="col s12 m4 l4"><p><ImgIcon  imagen="js"></ImgIcon></p></div>
        </div>

        <div class="row">
          <div class="col s12 m4 l4"><p><ImgIcon  imagen="materialize"></ImgIcon></p></div>
          <div class="col s12 m4 l4"><p><ImgIcon  imagen="mysql"></ImgIcon></p></div>
          <div class="col s12 m4 l4"><p><ImgIcon  imagen="react"></ImgIcon></p></div>
        </div>   


        <div id="portafolio" class="row txtCentro">
          <div class="col s12 titulos"><p>Portafolio</p></div>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>


        </div>

        <Contacto ></Contacto>

        


    </div>

    
    


    <div class="fixed-action-btn">
        <a class="btn-floating btn-large green"  href='https://api.whatsapp.com/send?phone=56976226068' target="_blank">
          <i class="large fab fa-whatsapp"></i>
        </a>        
</div>
      

    <Piedepagina/>
    </div>
  
  );
}

export default App;
