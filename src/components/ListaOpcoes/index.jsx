import './style.css'
import { CardOpcao } from '../CardOpcao'
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const ListaOpcoes = ({ opcoes, titulo, onClose }) => {
    const { descontarCreditos } = useContext(UserContext);
    const {creditos} = useContext(UserContext);
    // const opcoesFiltro = opcoes.filter(opcao => opcao.preco <=creditos)
    const escolherOpcao = (opcao) => {
        descontarCreditos(opcao.preco, opcao.tipo); 
        onClose(); 
    };

    return (
        <div className="lista-opcoes">
            <div className="topo-opcoes">
                <h2>{titulo}</h2>
                <button onClick={onClose}><i className="bi bi-x"></i></button>
            </div>
             
            <p className='creditos'>CRÉDITOS</p>
            <div className='opcoes'>
                {opcoes.map((opcao) => (
                    <CardOpcao
                        key={opcao.id}
                        id={opcao.id}
                        tipo={opcao.tipo}
                        nome={opcao.nome}
                        equipe={opcao.equipe}
                        imgSrc={opcao.img}
                        preco={opcao.preco}
                        desempenho={opcao.desempenho}
                        onEscolher={() => escolherOpcao(opcao)} 
                        creditos={creditos}
                    />
                ))}
            </div>
        </div>
    );
};