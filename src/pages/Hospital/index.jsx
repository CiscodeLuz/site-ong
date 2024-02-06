import hospstyle from '../Hospital/Hospital.css';

import medicoum from '../Hospital/IMG/medicoum.jpg'
import instrumentos from '../Hospital/IMG/instrumentos.jpg'
import { useState } from 'react';

export default function Hospital() {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    return(
        <>
        
        <img id='backTop' src={medicoum} alt="" />
        
      <header className='header-hospital'>
      <nav className="navbar-hospital">
        <div className="logo-hospital">HOSPITAL DR. BEZERRA DE MENEZES</div>
        <div className="menu-toggle-hospital" onClick={toggleMenu}>
          <div className="bar-hospital"></div>
          <div className="bar-hospital"></div>
          <div className="bar-hospital"></div>
        </div>
        <ul className={`menu-hospital ${showMenu ? 'show-hospital' : ''}`}>
          <li><a href="#/hospital">Início</a></li>
          <li><a href="#/servicos">Serviços</a></li>
          <li><a href="#/hospital">Sobre</a></li>
        </ul>
      </nav>
    </header>

        <div className="apresent">
                <h1>O hospital da família</h1>
                <p>Cuidando da sua saúde</p>
            <div className="container-apresent">
                <div className="secum"><a href='#/hospital'>Sobre</a></div>
                <div className="secdois"><a href='#/servicos'>Serviços</a></div>
            </div>
        </div>

        
        <div className="meio">
            <div className="formu">
            <div className="box"><h1>Faça seu<br/>pré cadastro</h1></div>
            <form action="https://formsubmit.co/eak.adm@hotmail.com" method="POST">
            <input type="text" name="name" placeholder="Seu nome..." required/>
            <input type="email" name="email" placeholder="Seu e-mail..." required/>
            <input type="tel" name="tel" placeholder="Seu telefone..." required/>
            <textarea name="message" placeholder="Escreva aqui..."></textarea>
            <input type="hidden" name="_template" value="table"/>
            <button type="submit">Enviar</button>
            </form>
            </div>
            <div id='sobre' className="container-meio">
                <img src={instrumentos}/>
                <p>O Hospital Dr. Bezerra de Menezes é uma instituição dedicada à prestação de serviços de saúde de qualidade, combinando a expertise médica com uma abordagem humanizada. O hospital busca promover o bem-estar da comunidade oferecendo uma ampla gama de especialidades médicas, instalações modernas e uma equipe comprometida. Com foco na integração entre medicina convencional e valores espirituais, o hospital visa proporcionar um ambiente acolhedor e compassivo para seus pacientes, visando não apenas a cura física, mas também o cuidado holístico.</p>
            </div>
        </div>

        <div className="hrodape">
            <div className="container-rodape">
                <h1>Serviços rápidos</h1>
                <a href="#/servicos">Serviços</a>
                <a href="#/hospital">Sobre</a>
            </div>
            <div className="container-rodape">
                <h1>Contato</h1>
                <p>(85) 98778-4209</p>
                <p>cbcx.adm@hotmail.com</p>
            </div>
        </div>
        
        </>
    )
}