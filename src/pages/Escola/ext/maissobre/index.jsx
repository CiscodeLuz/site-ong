import Maissobre from '../../../Escola/ext/maissobre/Maissobre.css'
import logoEscola from '../../../../IMG/logot.png'
import livros from '../../../../IMG/livros.jpg'
import bio from '../../../../IMG/bio.png'
import seta from '../../../../IMG/seta.png'

import coracao from '../../../../IMG/coracao.png'
import all from '../../../../IMG/compromisso-politico.png'
import passaro from '../../../../IMG/espirito-santo.png'
import ong from '../../../../IMG/ong.png'
import instagram from '../../../../IMG/instagram.png'
import React, { useState } from 'react';

export default function Maisobre() {
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

      
        <div className="conteudoSobre">
          <img src={livros}/>
          <h1>Sobre nós</h1>
          <div className="item">
          <div className="itens">
          <img id='bio' src={bio}/>
            <h2>A escola</h2>
            <p>
            A ESCOLA ALLAN KARDEC é uma instituição sem fins lucrativos.
            <br/>Temos como missão ensinar crianças,
            <br/>embasadas na metodologia de Pestalozzi.
            </p>
          </div>

          <div className="itens">
          <img src={all}/>
            <h2>Pestalozzi </h2>
            <p>
            Johann Heinrich Pestalozzi (1746-1827) foi um educador suíço cujas ideias inovadoras tiveram um impacto significativo na pedagogia. Seu método de ensino enfatiza o respeito pelo desenvolvimento natural da criança, a importância da educação moral e a integração de atividades práticas no processo de aprendizagem.
            </p>
          </div>

          <div className="itens">
          <img src={coracao}/>
            <h2>Aprendizagem ativa e prática</h2>
            <p>
            O ensino é centrado na experiência prática e na interação direta com o ambiente. Aulas práticas são projetadas para envolver os alunos de forma significativa.
            </p>
            </div>
          </div>
        </div>
        
        <div className="rdpe">
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