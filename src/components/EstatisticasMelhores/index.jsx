import './style.css'

export const EstatisticasMelhores  = () => {
    return(
        <div className='estatisticasMelhores'>
            
            <div className='melhor'>
                <h3>Melhor Piloto</h3>
                <img src='https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/4b62fd44-831d-4b01-9f11-2aaf2c47075c.png'></img>
                
                <div className='desempenhoMelhor'>
                <p>Pascal WEHRLEIN</p>
                <i className="bi bi-star"></i><p>20</p>
                </div>
            </div>
            <div className='melhor'>
                <h3>Melhor Chefe</h3>
                <img src='./Florian_porsche.png'></img>
                
                <div className='desempenhoMelhor'>
                <p>Florian MODLINGER</p>
                <i className="bi bi-star"></i><p>12</p>
                </div>
            </div>
            <div className='melhor'>
                <h3>Melhor Equipe</h3>
                <img src='https://static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/feb6762c-ae66-4c8e-a892-f958d6f7e774.png'></img>
                
                <div className='desempenhoMelhor'>
                <p>Porsche</p>
                <i className="bi bi-star"></i><p>16</p>
                </div>
            </div>
            <div className='melhor'>
                <h3>Melhor Motor</h3>
                <img src='https://cdn.worldvectorlogo.com/logos/mahindra-mahindra-logo.svg'></img>
                
                <div className='desempenhoMelhor'>
                <p>Mahindra</p>
                <i className="bi bi-star"></i><p>15</p>
                </div>
            </div>
        </div>
    )
}