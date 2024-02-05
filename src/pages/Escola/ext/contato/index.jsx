import contatoCss from '../contato/Contato.css'
import logoEscola from '../../../../IMG/logot.png'
import instagram from '../../../../IMG/instagram.png'
import React, { useState } from 'react';

export default function Contato() {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    return(
        <>
<header className="header-escola">
      <nav className="navbar-escola">
        <div className="logo-escola"><img src={logoEscola}/></div>
        <div className="menu-toggle-escola" onClick={toggleMenu}>
          <div className="bar-escola"></div>
          <div classdName="bar-escola"></div>
          <div className="bar-escola"></div>
        </div>
        <ul className={`menu-escola ${showMenu ? 'show-escola' : ''}`}>
          <li><a href="/escola">Home</a></li>
          <li><a href="/leiamais">Sobre</a></li>
          <li><a href="/contato">Matricule-se</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
    </header>


        <div className="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591.8334185596312!2d-38.6630573535476!3d-3.7304099653800846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0b56738880a8b%3A0xff8981b5d593b826!2sLar%20Beneficente%20Cisco%20de%20Luz!5e0!3m2!1spt-BR!2sbr!4v1705173435592!5m2!1spt-BR!2sbr" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

       <div className="formulario">
        <h1>Contate-nos</h1>
        <div className="conteudo">
        <form action="https://formsubmit.co/eak.adm@hotmail.com" method="POST">
        <input type="text" name="name" placeholder="Seu nome..." required/>
        <input type="email" name="email" placeholder="Seu e-mail..." required/>
        <textarea name="message" placeholder="Escreva aqui..."></textarea>
        <input type="hidden" name="_template" value="table"/>
        <button type="submit">Enviar</button>
        </form>
        </div>
       </div>

        <div className="rdp">
            <div className="contains">
              <a href="https://www.instagram.com/eak.adm/"> <img src={instagram}  /></a> 
            <p>Siga-nos nas redes sociais.
            
            </p>

            </div>

            <div className="contains">
                <span>Contate-nos</span>
                <p>
                    Tel: (85) 9 8778-4209
                    <br/>
                    Email: eak.adm@hotmail.com
           
            </p>
            </div>

            <div className="contains">
            <span>Endereço</span>
            <p>Rua Tobias Correia, 1404 - Centro, <br/>Caucaia - CE, 61600-060
            </p>
            </div>
            <div className="contains">
            <span>Direitos reservados</span>
            <p>© 2024 por Escola Allan Kardec.<br/>
            Criado por Matheus Ramaldes
            </p>
            </div>
        </div>


        </>
    )
}
