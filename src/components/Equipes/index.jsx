import { Escolha } from '../Escolha';
import './style.css';
import iconAdd from '../../images/icon_add.png';

export const Equipes = ({exibirListaOpcoes}) => {
    let equipe = JSON.parse(localStorage.getItem('equipe'));
    return (
        <div className="container-equipe">
            <h2>EQUIPE</h2>
            <div className="equipe-list">

            {equipe
                ? <Escolha 
                    nome={equipe[0].nome}
                    imgSrc={equipe[0].imgSrc} 
                    preco={equipe[0].preco}
                    desempenho={equipe[0].desempenho}
                    onOpen={exibirListaOpcoes} 
                />
                : <Escolha nome='Escolha sua equipe' imgSrc={iconAdd} onOpen={exibirListaOpcoes}/>
            }
            </div>
        </div>
    );
}
