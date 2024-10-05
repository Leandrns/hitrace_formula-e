import './style.css'

export const Corrida = () => {
    return (
        <div className='corrida'>
            <div className="dadosCorrida">
                <h2>E-prix de Londres</h2>
                <p>21 de Julho de 2024</p>
                <p>Etapa 16</p>
                <p>Corrida encerrada</p>
            </div>
            <div className="videoMomentos">
                <h2>Melhores Momentos</h2>
                <div className="videoContainer">
                    <iframe
                        src="https://www.youtube.com/embed/14r73tVLD5A"
                        title="Transmissão ao Vivo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
        )
}