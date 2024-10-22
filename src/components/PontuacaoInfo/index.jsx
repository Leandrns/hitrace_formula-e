import React, { useContext } from 'react';
import './style.css';
import { PontuacaoContext } from '../../context/PontuacaoContext';
const PontuacaoInfo = ({ pontuacaoWehrlein, pontuacaoEvans, pontuacaoMahindra, pontuacaoMahindraBio }) => {
    const { pontuacaoTotal, adicionarPontuacao } = useContext(PontuacaoContext);

    // Calcula a pontuação total com os valores passados como props
    const pontuacaoCalculada = pontuacaoWehrlein + pontuacaoEvans + pontuacaoMahindra + pontuacaoMahindraBio + 1;

    return (
        <div className="score-item">
            <h4>Pontuação</h4>
            <p>{pontuacaoTotal}</p>
        </div>
    );
};

export default PontuacaoInfo;
