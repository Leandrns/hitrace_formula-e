import { DetalhesEscolha } from '../DetalhesEscolha'
import './style.css'

export const Escolha = (props) => {
    return (
        <div className='escolha' onClick={props.onOpen}>
            <p className="nome">{props.nome}</p>
            <img src={props.imgSrc} alt={props.nome} className='img-escolha'/>
            <div className='infos-escolha'>
                <DetalhesEscolha 
                    preco='11'
                    desempenho='15' />
            </div>
        </div>
    )
}