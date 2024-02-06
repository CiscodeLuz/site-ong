import React, { useState } from 'react';
import logoChico from '../../IMG/logoChico.png'
import silhueta from '../../IMG/silhueta-do-homem-asiatico-consideravel-orando.jpg'
import styleS from '../../../Casa/ext/sobre/styleSobre.css'


export default function Sobre() {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    return(
        <>
        <img id='backsilhueta' src={silhueta} alt="" />
        <header className="header-casa">
      <nav className="navbar-casa">
        <div className="logo-casa"><img src={logoChico}/></div>
          <div className="menu-toggle-casa" onClick={toggleMenu}>
          <div className="bar-casa"></div>
          <div classdName="bar-casa"></div>
          <div className="bar-casa"></div>
        </div>
        <ul className={`menu-casa ${showMenu ? 'show-casa' : ''}`}>
          <li><a href="site-ong/#/casa">Início</a></li>
          <li><a href="site-ong/#/sobre-casa">Sobre</a></li>
          <li><a href="site-ong/#/cursos">Cursos</a></li>
        </ul>
      </nav>
    </header>

    <div className="sobre">
      <div className="sobre-content">
        <h1>Quem somos?</h1>
        <p>Temos o propósito de promover estudos e práticas relacionadas ao espiritismo, além de realizar atividades sociais e filantrópicas. Buscamos disseminar os princípios espíritas, como a crença na imortalidade da alma, na reencarnação e na influência dos espíritos encarnados e não encarnados.</p>
      </div>
    </div>


    
        </>
    )
}