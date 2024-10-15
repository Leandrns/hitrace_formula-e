import './style.css'

export const DetalhesEscolha = (props) => {
    return (
        <div className='detalhes-escolha'>
            <div className="preco">
                <i className="bi bi-coin"></i>
                <p>{props.preco}</p>
            </div>
            <div className="desempenho">
                <i class="fa-solid fa-star"></i>
                <p>{props.desempenho}</p>
            </div>
        </div>
        
    )
}