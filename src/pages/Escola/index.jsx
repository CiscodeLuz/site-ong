import Escolacss from './Escola.css'
import slideum from '../../IMG/slideum.jpg'
import logot from '../../IMG/logot.png'
import fundamental from '../../IMG/criaum.jpg'
import infantil from '../../IMG/infantil.jpg'
import medio from '../../IMG/medio.jpg'
import superior from '../../IMG/superior.jpg'
import instagram from '../../IMG/instagram.png'
import logoEscola from '../../IMG/logot.png'
import ensino from '../../IMG/ensino.png'
import coracao from '../../IMG/coracao.png'
import 'boxicons'; 
import React, { useState } from 'react';

export default function Escola() {

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
          <li><a href="site-ong/#/escola">Home</a></li>
          <li><a href="site-ong/#/leiamais">Sobre</a></li>
          <li><a href="site-ong/#/contato">Matricule-se</a></li>
          <li><a href="site-ong/#/contato">Contato</a></li>
        </ul>
      </nav>
    </header>


      <div className="front">
        <img src={slideum}/>
      </div>


      <div className="apresentacao">

        <div className="boxone">
          <img src={logot}/>
          <h1>Bem-vindo à escola Allan Kardec</h1>
          <p>A ESCOLA ALLAN KARDEC é uma instituição sem fins lucrativos.
          Temos como missão ensinar crianças,
          embasadas na metodologia de Pestalozzi.</p>
          <a href="/leiamais">Leia Mais</a>
        </div>
        <div className="boxtwo">
          <h1>O que oferecemos ?</h1>

          <div className="sec">
            <h1>Cursos</h1>
            <p>Garantimos a formação necessária para o seu futuro!</p>
            <a href="#desscard">
              <div className="cont">
              <span>Saiba mais</span>
              </div>
            </a>
          </div>

          <div className="sec">
            <h1>Desenvolvimento</h1>
            <p>Desenvolvimento global, incluindo aspectos físicos, emocionais e intelectuais.</p>
            <a href="#desscard">
              <div className="cont">
                <span>Saiba mais</span>
              </div>
            </a>
          </div>

        </div>
      </div>

      

      <div className="cards">

        <div id='desscard' className="card">
          <img src={infantil}/>
          <h2>Ensino infantil</h2>
          <a href="/contato">
            <div className="cnt">
              <span>Saiba Mais</span>
            </div>
          </a>
        </div>

        <div className="card">
          <img src={fundamental}/>
          <h2>Ensino fundamental</h2>
          <a href="/contato">
            <div className="cnt">
              <span>Saiba Mais</span>
            </div>
          </a>
        </div>

        <div className="card">
          <img src={medio}/>
          <h2>Ensino médio</h2>
          <a href="/contato">
            <div className="cnt">
              <span>Saiba Mais</span>
            </div>
          </a>
        </div>

        <div className="card">
          <img src={superior}/>
          <h2>Ensino superior</h2>
          <a href="/contato">
            <div className="cnt">
              <span>Saiba Mais</span>
            </div>
          </a>
        </div>

        <div className="card">
          <img src={ensino}/>
          <h2>Idiomas</h2>
          <a href="/contato">
            <div className="cnt">
              <span>Saiba Mais</span>
            </div>
          </a>
        </div>
      </div>

     


        <div className="rodp">
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