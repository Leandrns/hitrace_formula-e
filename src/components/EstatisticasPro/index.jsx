import './style.css'
import { EstatisticasMelhores } from '../EstatisticasMelhores'
export const EstatisticasPro = () => {
    return(
        <div className='modoPro'>
            <h2>Modo PRO</h2>
            
            <h3>Os MELHORES pontuadores da última corrida</h3>
            <EstatisticasMelhores/>
        </div>
    )
}