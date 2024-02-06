import { BrowserRouter } from 'react-router-dom'
import HomeCss from '../Home/Home.css'
import React, { useState } from 'react';
import logoCisco from '../../IMG/logoCisco.png'
import logos from '../../IMG/Logos.png'
import escola from '../../IMG/escola.png'
import igreja from '../../IMG/igreja.png'
import hospital from '../../IMG/hospital.png'
import backtop from '../../IMG/vida.png'
import email from '../../IMG/email.png'

export default function Home() {
  
  function toggleMenu() {
    if(document.getElementById('overlay').style.width == "0") {
      document.getElementById('overlay').style.width = "100%"
    } else {
      document.getElementById('overlay').style.width = "0"
    }
  }
  return(
    <>
  <header className="header-home">
    <div class="logo"><img src={logoCisco}/></div>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="burger-menu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </label>
    <nav class="navbar-home">
      <ul class="nav-list">
        <li><a href="site-ong/#/escola"><img id='imgresponsive' src={escola}/>Escola</a></li>
        <hr id='hr'></hr>
        <li><a href="site-ong/#/casa"><img id='imgresponsive' src={igreja}/>Igreja</a></li>
        <hr id='hr'></hr>
        <li><a href="site-ong/#/hospital"><img id='imgresponsive' src={hospital}/>Hospital</a></li>

      </ul>
    </nav>
  </header>


   <img id='backtop' src={backtop}/>
  <div className="top">
    <div className="top-container">
      <h1>LAR BENEFICENTE CISCO DE LUZ</h1>
      <p>Restabelecendo os vínculos fraternais !</p>
      <a href='mailto:ciscodeluz@hotmail.com'><img src={email} alt="" /></a>
    </div>
  </div>


    <div className="informa">
      <div className="title">
      <h1>Sobre nós</h1>
    <hr id='hr2'></hr>
    <span>O lar beneficente Cisco de Luz é uma entidade não governamental, sem fins lucrativos. Desde 2020, tivemos um crescimento em várias áreas. </span>
      </div>
      <div className="informa-container">
        <div className="boxes">
        <img id='imgresponsive' src={escola}/>
        <h2>Escola Allan Kardec</h2>
        <p>Temos como missão ensinar crianças embasadas na metodologia da Pestalozzi. ✏️</p>
        </div>
        <div className="boxes">
        <img id='imgresponsive' src={igreja}/>
    <h2>Casa de bençãos Chico Xavier</h2>
    <p>Aliança espírita evangélica cristã, temos como missão servir, ensinar e aprender com amor e humildade. 🙏🏼</p>
        </div>
        <div className="boxes">
        <img id='imgresponsive' src={hospital}/>
    <h2>Hospital Dr. Bezerra de Menezes</h2>
    <p>Oferecemos todo suporte e cuidado com sua saúde. ❤️</p>
        </div>
      </div>
    </div>



    <div className="rodape-home">
      <div className="rodape-home-content">
      <div className="boxer">
        <img src={logos}/>
        </div>
        <div className="boxer">
          <h1>Redes</h1>
         <a href='https://www.instagram.com/eak.adm/'><box-icon type='logo' color='#c3c3c3' name='instagram'></box-icon></a>
         <a href='https://wa.me/5511987784209'><box-icon name='whatsapp' color='#c3c3c3' type='logo' ></box-icon></a>
        </div>
        <div className="boxer">
        <h1>Mais informações</h1>
        <a href="site-ong/#/igreja">Igreja</a>
        <a href="site-ong/#/escola">Escola</a>
        <a href="site-ong/#/hospital">Hospital</a>
        </div>
  
       
     
      </div>
    </div>

      </>

    )
}