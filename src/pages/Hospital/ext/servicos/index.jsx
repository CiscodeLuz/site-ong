import servicosCss from '../servicos/Servicos.css'
import servicos from '../servicos/IMG/servicos.jpg'
import { useState } from 'react';

export default function Servicos() {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    return(
        <>

        <img id='backservicos' src={servicos} alt="" />
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

    <div className="serv">
        <div className="container-serv">
            <select>
                <option value="">Médico</option>
                <option value="">Clínico geral</option>
                <option value="">Cardiologia</option>
                <option value="">Dermatologia</option>
                <option value="">Ginecologista</option>
                <option value="">Mastologia</option>
                <option value="">Neurologia</option>
                <option value="">Oftalmologista</option>
                <option value="">Ortopedia</option>
                <option value="">Pediatria</option>
                <option value="">Reumatologia</option>
                <option value="">Urologia</option>
            </select>

            <select>
                <option value="">Apoio Terapêutico</option>
                <option value="">Fisioterapia</option>
                <option value="">Fonoaudiologia</option>
                <option value="">Nutricionista</option>
            </select>

            <select>
                <option value="">Saúde Preventiva</option>
                <option value="">Enfermagem</option>
                <option value="">Odontologia</option>
                
            </select>

            <select>
                <option value="">Grupo Psiquiátrico</option>
                <option value="">Psiquiatria</option>
                <option value="">Psicologia</option>
            </select>
        <h1>Agendamento de serviços somente presencial</h1>

        </div>

    </div>



    <div className="srodape">
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