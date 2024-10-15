import './style.css'
import { CardOpcao } from '../CardOpcao'

export const ListaOpcoes = ({opcoes, titulo, onClose}) => {
    return (
        <div className="lista-opcoes">
            <div className="topo-opcoes">
                <h2>{titulo}</h2>
                <button onClick={onClose}><i class="bi bi-x"></i></button>
            </div>
            <div className='opcoes'>
            {opcoes.map((opcao) => (
                <CardOpcao 
                    id={opcao.id}
                    tipo={opcao.tipo}
                    nome={opcao.nome}
                    equipe={opcao.equipe}
                    imgSrc={opcao.img}
                    preco={opcao.preco}
                    desempenho={opcao.desempenho}
                    onClose={onClose}/>
            ))}
            </div>
        </div>
    )
}