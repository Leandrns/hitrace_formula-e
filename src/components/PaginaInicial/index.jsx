import './style.css'
import logoHitRace from '../../images/logo_hitrace.svg'
import pilotosFoto from '../../images/pilotos.svg'
import timesFoto from '../../images/times.svg'

export const PaginaInicial = () => {
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    return (
        <div className='cabecalho'>
            <h1>Seja bem-vindo(a) ao</h1>
            <img src={logoHitRace} alt="Logo HitRace" className='logo' />
            <img src={pilotosFoto} alt='pilotos' className='pilotosfoto'/>
            <img src={timesFoto} alt='times' className='times'/>
        </div>
    )
}