import inf from '../info/Info.css'
import logoEscola from '../../../../IMG/logoEscola.png'

export default function Info() {
    return (
        <>

<div className="navB">
            <div className="container">
          <img className="imgborder" src={logoEscola}></img>
          <a href="/escola">HOME</a>
          <a href="/leiamais">A ESCOLA</a>
          <a href="">AULAS</a>
          <a href="/contato">CONTATO</a>
          </div>
      </div>

      <div className="top">
        <span>Rua Tobias Correia, 1404 - Centro, Caucaia - CE, 61600-060</span>
        <h1></h1>
      </div>
      
        </>
    )
}