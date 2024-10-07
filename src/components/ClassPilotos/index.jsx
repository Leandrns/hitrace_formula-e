import { useEffect, useState } from 'react';
import PontuacaoInfo from '../PontuacaoInfo';
import './style.css';

const pilotos = [
    { nome: 'Rowland', equipe: 'N/D' },
    { nome: 'Wehrlein', equipe: 'Porsche' },
    { nome: 'Evans', equipe: 'Jaguar' },
    { nome: 'Buemi', equipe: 'Envision' },
    { nome: 'Vergne', equipe: 'DS Techeetah' },
    { nome: 'Müller', equipe: 'N/D' },
    { nome: 'Frijns', equipe: 'Envision' },
    { nome: 'Vandoorne', equipe: 'Mercedes' },
    { nome: 'Di Grassi', equipe: 'Audi' },
    { nome: 'Hughes', equipe: 'N/D' },
    { nome: 'Mortara', equipe: 'Mahindra' },
    { nome: 'De Vries', equipe: 'Mahindra' },
];

const pontuacaoPorPosicao = [25, 18, 15, 12, 10, 8, 6, 4, 2, 2];

const equipes = [
    { nome: 'Envision', pilotos: ['Buemi', 'Frijns'] },
    { nome: 'Porsche', pilotos: ['Wehrlein'] },
    { nome: 'Jaguar', pilotos: ['Evans'] },
    { nome: 'Penske', pilotos: ['Vergne', 'Vandoorne'] },
    { nome: 'ERT', pilotos: ['Di Grassi'] },
    { nome: 'Mahindra', pilotos: ['De Vries', 'Mortara'] },
];

const motores = [
    { nome: 'Mahindra M9', equipes: ['Mahindra', 'ERT'] },
    { nome: 'PorscheBio', equipes: ['Porsche'] },
    { nome: 'Jaguar Type-6', equipes: ['Jaguar'] },
];
;

export const ClassPilotos = () => {
    const [baterias, setBaterias] = useState(pilotos.map(p => ({ ...p, bateria: 100 })));
    const [posicoes, setPosicoes] = useState(pilotos.map((p, index) => ({ ...p, posicao: index + 1 })));
    const [pontuacoes, setPontuacoes] = useState(Array(pilotos.length).fill(0));
    const [corridaAtiva, setCorridaAtiva] = useState(true);

    // const reiniciarCorrida = () => {
    //     setBaterias(pilotos.map(p => ({ ...p, bateria: 100 })));
    //     setPosicoes(pilotos.map((p, index) => ({ ...p, posicao: index + 1 })));
    //     setPontuacoes(Array(pilotos.length).fill(0));
    //     setCorridaAtiva(true);
    // };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!corridaAtiva) return;

            setBaterias(prevBaterias => {
                return prevBaterias.map(p => {
                    if (p.bateria > 0) {
                        return { ...p, bateria: Math.max(p.bateria - (100 / (30 * (1000 / 500))), 4) };
                    }
                    return p;
                });
            });

            setPosicoes(prevPosicoes => {
                const novasPosicoes = [...prevPosicoes];
                const indice1 = Math.floor(Math.random() * novasPosicoes.length);
                const indice2 = Math.floor(Math.random() * novasPosicoes.length);
                [novasPosicoes[indice1], novasPosicoes[indice2]] = [novasPosicoes[indice2], novasPosicoes[indice1]];
                return novasPosicoes.map((p, index) => ({ ...p, posicao: index + 1, animacao: true }));
            });
        }, 500);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            setCorridaAtiva(false);
        }, 30000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [corridaAtiva]);

    useEffect(() => {
        const novasPontuacoes = posicoes.map((piloto, index) => {
            const posicao = piloto.posicao - 1;
            return pontuacaoPorPosicao[posicao] || 0;
        });
        setPontuacoes(novasPontuacoes);
    }, [posicoes]);

    const getPontuacaoPorNome = (nome) => {
        const index = posicoes.findIndex(p => p.nome === nome);
        return index !== -1 ? pontuacoes[index] : 0;
    };

    // Calcular pontuação total das equipes
    const calcularPontuacaoEquipes = () => {
        return equipes.map(equipe => {
            const pontuacaoTotal = equipe.pilotos.reduce((total, pilotoNome) => {
                return total + getPontuacaoPorNome(pilotoNome);
            }, 0);
            return { nome: equipe.nome, pontuacao: pontuacaoTotal };
        });
    };

    const calcularPontuacaoMotores = () => {
        return motores.map(motor => {
            const pontuacaoTotal = motor.equipes.reduce((total, equipeNome) => {
                const equipe = equipes.find(equipe => equipe.nome === equipeNome);
                if (equipe) {
                    return total + equipe.pilotos.reduce((acc, pilotoNome) => {
                        return acc + getPontuacaoPorNome(pilotoNome);
                    }, 0);
                }
                return total;
            }, 0);
            return { nome: motor.nome, pontuacao: pontuacaoTotal };
        });
    };

    const pontuacoesEquipes = calcularPontuacaoEquipes();
    console.log("Pontuações das equipes:", pontuacoesEquipes); // Log para depuração
    const pontuacoesMotores = calcularPontuacaoMotores();
    console.log("Pontuações das equipes:", pontuacoesMotores); // Log para depuração
    const pontuacaoWehrlein = getPontuacaoPorNome('Wehrlein');
    const pontuacaoEvans = getPontuacaoPorNome('Evans');
    const pontuacaoMahindraEquipe = pontuacoesEquipes.find(equipe => equipe.nome === 'Mahindra')?.pontuacao || 0;
    const pontuacaoMahindraM9 = pontuacoesMotores.find(motor => motor.nome === 'Mahindra M9')?.pontuacao || 0;

    const totalPontuacao = pontuacaoWehrlein + pontuacaoEvans + pontuacaoMahindraEquipe + pontuacaoMahindraM9;

    return (
        <div className='classPilotos'>
            <div className='escolhasUser'>
            <p>Pontuação Total: {totalPontuacao}</p>
            <ul>
                <li>PILOTO1 - Wehrlein = {pontuacaoWehrlein}</li>
                <li>PILOTO2 - Evans = {pontuacaoEvans}</li>
                <li>EQUIPE - Mahindra = {pontuacaoMahindraEquipe}</li>
                <li>MOTOR - Mahindra M9 = {pontuacaoMahindraM9}</li>
            </ul>
            </div>

            <div className="listaClassificacao">
                <ul>
                    <h2>Classificação da Corrida</h2>
                    {posicoes.map((piloto, index) => (
                        <li key={index} className="piloto-item">
                            {piloto.posicao} - {piloto.nome} <i class="fa-solid fa-bolt"></i>
                            <div className="bateria">
                                <div className="bateria-nivel" style={{ width: `${baterias[index].bateria}%` }}></div>
                            </div>
                            <div>Pontos: {pontuacoes[index]}</div>
                        </li>
                    ))}
                </ul>

                <ul className='listaEquipes'>
                    <h2>Pontuação das Equipes</h2>
                    {pontuacoesEquipes.map((equipe, index) => (
                        <li key={index} className="piloto-item">
                            {equipe.nome}: {equipe.pontuacao} pontos
                        </li>
                    ))}
                </ul>

                <ul>
                    <h2>Pontuação dos Motores</h2>
                    {pontuacoesMotores.map((motor, index) => (
                        <li key={index} className="piloto-item">
                            {motor.nome}: {motor.pontuacao} pontos
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};