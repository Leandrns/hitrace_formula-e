import './style.css';

export const CardOpcao = ({ tipo, id, nome, equipe, imgSrc, preco, desempenho, onEscolher }) => {
    const adicionarAosEscolhidos = () => {
        let escolhido = [];
        escolhido.push({ id, nome, equipe, imgSrc, preco, desempenho });
        localStorage.setItem(tipo, JSON.stringify(escolhido));
        onEscolher(); 
    };

    return (
        <div className='card-opcao' onClick={adicionarAosEscolhidos}>
            <img src={imgSrc} alt={nome} />
            <div className="textos">
                <h2>{nome}</h2>
                <p>{equipe}</p>
            </div>
            <p className='desempenho'><i className="bi bi-star"></i> {desempenho}</p>
            <h2 className='preco'>{preco}</h2>
        </div>
    );
};
