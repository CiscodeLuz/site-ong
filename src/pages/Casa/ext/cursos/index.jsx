import React, { useState } from 'react';
import 'boxicons'
import cursosCSS from '../cursos/Cursos.css'
import logoChico from '../../IMG/logoChico.png'
import biblia from '../../IMG/biblia-sagrada-com-raios-de-luz-saindo-de-ia-generativa (1).jpg'

export default function Cursos() {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    return(
        <>
        <img id='backbiblia' src={biblia} alt="" />
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

    <div className="cursos">
    <div className="cursos-content">
        <box-icon name='shape-triangle'  color='antiquewhite' size='40px' ></box-icon>
            <h1>Básico</h1>
            <p>Oratória</p>
            <p>Principiante Espírita</p>
        </div>
        <div className="cursos-content">
        <box-icon type='logo' color='antiquewhite' size='40px' name='graphql'></box-icon>
            <h1>Magnetismo</h1>
            <p>Nível Básico</p>
            <p>Nível Avançado</p>
        </div>
        <div className="cursos-content">
        <box-icon type='solid' color='antiquewhite' size='40px'  name='hand'></box-icon>
            <h1>Passe</h1>
            <p>Nível Básico</p>
            <p>Nível Avançado</p>
        </div>
   
        <div className="cursos-content">
        <box-icon name='shield-alt-2' color='antiquewhite' size='40px'></box-icon>
            <h1>Atividades específicas</h1>
            <p>Laboratório Mediúnico</p>
            <p>Acolhimento Fraterno</p>
            <p>E mais..</p>
        </div>
        
    </div>
        </>
    )
}