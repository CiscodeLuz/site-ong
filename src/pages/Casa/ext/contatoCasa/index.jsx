import contatoCasa from '../contatoCasa/contatoCasa.css'
import React, { useState } from 'react';
import logoChico from '../../IMG/logoChico.png'
import silhuetaContato from '../../IMG/silueta-de-mao-humana-segurando-biblia-e-crucifixos-a-fundo-e-a-amanhecer.jpg'

export default function CttCasa() {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    return(
        <>
        <img id='backsil' src={silhuetaContato} alt="" />
    <header className="header-casa">
      <nav className="navbar-casa">
        <div className="logo-casa"><img src={logoChico}/></div>
          <div className="menu-toggle-casa" onClick={toggleMenu}>
          <div className="bar-casa"></div>
          <div classdName="bar-casa"></div>
          <div className="bar-casa"></div>
        </div>
        <ul className={`menu-casa ${showMenu ? 'show-casa' : ''}`}>
          <li><a href="#/casa">Início</a></li>
          <li><a href="#/sobre-casa">Sobre</a></li>
          <li><a href="#/cursos">Cursos</a></li>
        </ul>
      </nav>
    </header>
    <div className="rodape-casa-contato">
        <div className="rodape-content">
          <h1>Guia</h1>
          <a href="#/sobre-casa">Sobre</a> 
          <a href="#/cursos">Cursos</a>  
        </div>
        <div className="rodape-content">
          <h1>Fale conosco</h1>
          <div className="linke">
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