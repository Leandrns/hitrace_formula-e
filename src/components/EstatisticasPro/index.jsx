import './style.css'
import { EstatisticasMelhores } from '../EstatisticasMelhores'
import { EstatisticasEscalados } from '../EstatisitcasEscalados'
export const EstatisticasPro = () => {
    return(
        <div className='modoPro'>
            <h1>HIT RACE PRO</h1>
            
            <h2>Os MELHORES pontuadores</h2>
            <EstatisticasMelhores/>
            <h2>Os Mais Selecionados Pelos Usuários</h2>
            <EstatisticasEscalados />
        </div>
    )
}