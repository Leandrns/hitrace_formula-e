import './style.css'
import { PerfilAside } from '../PerfilAside'
import { FooterAside } from '../FooterAside'
import InfosAside from '../InfosAside';
import NavButtons from '../NavButtons';
import logoHitRace from '../../images/logo_hitrace.svg'

export const Aside = () => {
    
    return (
        <div className="aside">
            <PerfilAside />
            <InfosAside />
            <NavButtons />
            <img src={logoHitRace} alt="Logo HitRace" className='logo-game' />
            <FooterAside />
            <div className='openAside'><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}