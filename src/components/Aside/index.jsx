import './style.css'
import { PerfilAside } from '../PerfilAside'
import { FooterAside } from '../FooterAside'
import InfosAside from '../InfosAside';
import NavButtons from '../NavButtons';
import logoHitRace from '../../images/logo_hitrace.svg'

export const Aside = ({ telaAtiva, setTelaAtual }) => {
    
    return (
        <div className="aside">
            <PerfilAside />
            <InfosAside />
            <NavButtons telaAtiva={telaAtiva} setTelaAtual={setTelaAtual}/>
            <img src={logoHitRace} alt="Logo HitRace" className='logo-game' />
            <FooterAside />
            <div className='openAside'><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}