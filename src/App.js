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
    <div class="row">
          <div class="col s12"><p>Habilidades</p></div>
          <div class="col s12 m4 l4"><p><ImgIcon></ImgIcon></p></div>
          <div class="col s12 m4 l4"><p><ImgIcon></ImgIcon></p></div>
          <div class="col s12 m4 l4"><p><ImgIcon></ImgIcon></p></div>
        </div>

        <div class="row">
          <div class="col s12 m4 l4"><p><ImgIcon></ImgIcon></p></div>
          <div class="col s12 m4 l4"><p><ImgIcon></ImgIcon></p></div>
          <div class="col s12 m4 l4"><p><ImgIcon></ImgIcon></p></div>
        </div>   


        <div class="row">
          <div class="col s12"><p>Portafolio</p></div>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>
          <Tarjeta></Tarjeta>


        </div>

        <Contacto></Contacto>


    </div>

    
    


    <div class="fixed-action-btn">
  <a class="btn-floating btn-large red">
    <i class="large material-icons">mode_edit</i>
  </a>
  <ul>
    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
  </ul>
</div>
      

    <Piedepagina/>
    </div>
  
  );
}

export default App;
