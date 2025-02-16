import './style.css'; 
import { Escolha } from '../Escolha';
import iconAdd from '../../images/icon_add.png';

export const Tecnicos = ({exibirListaOpcoes}) => {
    let tecnico = JSON.parse(localStorage.getItem('tecnico')) || false;
    return (
        <div className="container-tecnico">
            <h2>CHEFE DE EQUIPE</h2>
            <div className="tecnicos-list">
            {tecnico 
                ? <Escolha 
                    nome={tecnico[0].nome} 
                    imgSrc={tecnico[0].imgSrc} 
                    preco={tecnico[0].preco}
                    desempenho={tecnico[0].desempenho}
                    onOpen={exibirListaOpcoes}/> 
                : <Escolha nome='Escolha seu técnico' imgSrc={iconAdd} onOpen={exibirListaOpcoes}/>}
            </div>
        </div>
    );
}

