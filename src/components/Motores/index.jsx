import { Escolha } from '../Escolha';
import './style.css';

export const Motores = ({exibirListaOpcoes}) => {
    let motor = JSON.parse(localStorage.getItem('motor')) || false;
    return (
        <div className="container-motor">
            <h2>MOTOR</h2>
            <div className="motor-list">
            {motor
                ? <Escolha 
                    nome={motor[0].nome}
                    imgSrc={motor[0].imgSrc} 
                    preco={motor[0].preco}
                    desempenho={motor[0].desempenho}
                    onOpen={exibirListaOpcoes} 
                />
                : <Escolha nome='Escolha seu motor' imgSrc='https://cdn.icon-icons.com/icons2/495/PNG/512/add-circle-1_icon-icons.com_48714.png' onOpen={exibirListaOpcoes}/>
            }
            </div>
        </div>
    )
}