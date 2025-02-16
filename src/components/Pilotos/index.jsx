import './style.css';
import { Escolha } from '../Escolha';
import iconAdd from '../../images/icon_add.png';

export const Pilotos = ({exibirListaOpcoes}) => {
    let piloto1 = JSON.parse(localStorage.getItem('piloto1')) || false;
    return (
        <div className="container-pilotos">
            <h2>PILOTO 1</h2>
            <div className="pilotos">
                {piloto1 
                ? <Escolha 
                    nome={piloto1[0].nome} 
                    imgSrc={piloto1[0].imgSrc} 
                    preco={piloto1[0].preco}
                    desempenho={piloto1[0].desempenho}
                    onOpen={exibirListaOpcoes}/> 
                : <Escolha nome='Escolha seu piloto 1' imgSrc={iconAdd} onOpen={exibirListaOpcoes}/>}
            </div>
        </div>
    )
}