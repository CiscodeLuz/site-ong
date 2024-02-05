import React, { useState } from 'react';
import logoChico from '../../pages/Casa/IMG/logoChico.png'
import backfoto from '../../pages/Casa/IMG/vista-de-tras-da-multidao-de-fas-assistindo-ao-concerto-ao-vivo-3.jpg'
import allan from '../../pages/Casa/IMG/allan-kardec-tratado-2.webp'
import casaCSS from '../Casa/Casa.css'

export default function Casa() {
    
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    return(
        <>
        <img id='backfoto' src={backfoto} alt="" />
    <header className="header-casa">
      <nav className="navbar-casa">
        <div className="logo-casa"><img src={logoChico}/></div>
          <div className="menu-toggle-casa" onClick={toggleMenu}>
          <div className="bar-casa"></div>
          <div classdName="bar-casa"></div>
          <div className="bar-casa"></div>
        </div>
        <ul className={`menu-casa ${showMenu ? 'show-casa' : ''}`}>
          <li><a href="/casa">Início</a></li>
          <li><a href="/sobre-casa">Sobre</a></li>
          <li><a href="/cursos">Cursos</a></li>
        </ul>
      </nav>
    </header>

      <div className="face">
        <div className="cface">
          <h1>
        Casa de bençãos
        Chico Xavier
          </h1>
          <p>    ALIANÇA ESPÍRITA EVANGÉLICA CRISTÃ </p>
          <a href='/contato-casa'>
          <div className="visite">
            Visite-nos
          </div>
          </a>
        </div>
      </div>

      <div className="info">
        <div className="info-container">
          <h1>Fique por dentro da nossa programação !</h1>
          <div className="prog">
            <h1>Programação semanal</h1>
            <span>Quinta-feira - 19:00 às 21:00</span><br/>
            <span>Domingo - 19:07:00 às 12:00 ~ 18:00 às 21:00</span>
          </div>
        </div>
      </div>
      <div className="rodape-casa">
        <div className="rodape-content">
          <h1>Guia</h1>
          <a href="/sobre-casa">Sobre</a> 
          <a href="/cursos">Cursos</a>  
          <a href="/contato">Contato</a>  
        </div>
        <div className="rodape-content">
          <h1>Fale conosco</h1>
          <div className="link">
          <a  href="https://www.facebook.com/CB.CHICOXAVIER"><box-icon type='logo' color='white' name='facebook-square'></box-icon></a>
          <a  href="https://www.instagram.com/cb.chicoxavier/"><box-icon name='instagram-alt' type='logo' color='#ffffff' ></box-icon></a>
          </div>
          <p>(85) 98778-4209</p>
          <p>cbcx.adm@hotmail.com</p>
        </div>
        <div className="rodape-content">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.364842535383!2d-38.665709825951794!3d-3.730400743180397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0b4d75dd82423%3A0x4de7cc7a06f7bb21!2sRua%20Tobias%20Correia%2C%201404%20-%20Novo%20Pabussu%2C%20Caucaia%20-%20CE%2C%2061600-060!5e0!3m2!1spt-BR!2sbr!4v1706648556908!5m2!1spt-BR!2sbr" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

 

      
        </>
    )
}