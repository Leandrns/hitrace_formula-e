import './style.css'
import { Escolha } from '../Escolha'
import iconAdd from '../../images/icon_add.png';

export const Pilotos2 = ({exibirListaOpcoes}) => {
    let piloto2 = JSON.parse(localStorage.getItem('piloto2')) || false;
    return (
        <div className="container-pilotos">
            <h2>PILOTO 2</h2>
            <div className="pilotos">
                {piloto2
                ? <Escolha 
                    nome={piloto2[0].nome} 
                    imgSrc={piloto2[0].imgSrc} 
                    preco={piloto2[0].preco}
                    desempenho={piloto2[0].desempenho}
                    onOpen={exibirListaOpcoes}/>
                : <Escolha nome='Escolha seu piloto 2' imgSrc={iconAdd} onOpen={exibirListaOpcoes}/>}
            </div>
        </div>
    )
}