import './style.css'
let escolhido = false;


export const CardOpcao = ({tipo, id, nome, equipe, imgSrc, preco, onClose}) => {
    const adicionarAosEscolhidos = () => {
        let escolhido = [];
        escolhido.push({id, nome, equipe, imgSrc, preco});
        localStorage.setItem(tipo, JSON.stringify(escolhido))
        onClose()
    }
    return (
        <div className='card-opcao' onClick={adicionarAosEscolhidos}>
            <img src={imgSrc} alt={nome} />
            <div className="textos">
                <h2>{nome}</h2>
                <p>{equipe}</p>
            </div>
            {escolhido === true 
                ? <i class="bi bi-check-lg"></i> 
                : <h2 className='preco'>{preco}</h2>}
        </div>
    )
}