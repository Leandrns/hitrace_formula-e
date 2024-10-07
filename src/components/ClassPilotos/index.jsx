import { useEffect, useState } from 'react';
import './style.css';

const pilotos = [
    { nome: 'Rowland', equipe: 'Nissan' },
    { nome: 'Wehrlein', equipe: 'Porsche' },
    { nome: 'Evans', equipe: 'Jaguar' },
    { nome: 'Buemi', equipe: 'Envision' },
    { nome: 'Vergne', equipe: 'DS Techeetah' },
    { nome: 'Müller', equipe: 'Cupra' },
    { nome: 'Frijns', equipe: 'Envision' },
    { nome: 'Vandoorne', equipe: 'Mercedes' },
    { nome: 'Di Grassi', equipe: 'ERT' },
    { nome: 'Hughes', equipe: 'McLaren' },
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
    { nome: 'Maclaren', pilotos: ['Hughes'] },
    { nome: 'Nissan', pilotos: ['Rowland'] },
];

const motores = [
    { nome: 'Mahindra M9', equipes: ['Mahindra', 'ERT'] },
    { nome: 'Porsche 99X', equipes: ['Porsche'] },
    { nome: 'Jaguar Type-6', equipes: ['Jaguar', 'Envision'] },
    { nome: 'Nissan e-4ORCE', equipes: ['MacLaren', 'Nissan'] },
];

const tecnico = [
    { nome: 'Frederic Bertrand', componentes: ['Mahindra', 'Mahindra M9'] },
    { nome: 'Florian MODLINGER', componentes: ['Porsche', 'Porsche 99X'] },
    { nome: 'James Barclay', componentes: ['Jaguar', 'Jaguar Type-6'] },
    { nome: 'Tommaso Volpe', componentes: ['Nissan', 'Nissan e-4ORCE'] },
];


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

    const calcularPontuacaoTecnicos = () => {
        return tecnico.map(tecnico => {
            const pontuacaoEquipe = equipes.reduce((total, equipe) => {
                if (equipe.pilotos && tecnico.componentes.includes(equipe.nome)) {
                    return total + calcularPontuacaoEquipes().find(e => e.nome === equipe.nome)?.pontuacao || 0;
                }
                return total;
            }, 0);
    
            return { nome: tecnico.nome, pontuacao: pontuacaoEquipe / 3 }; // Divisão para ajustar a pontuação
        });
    };
    

    const [pontuacoesTecnicos, setPontuacoesTecnicos] = useState([]);

    useEffect(() => {
        setPontuacoesTecnicos(calcularPontuacaoTecnicos());
    }, [equipes, posicoes]);

    const pontuacoesEquipes = calcularPontuacaoEquipes();
    console.log("Pontuações das equipes:", pontuacoesEquipes); // Log para depuração
    const pontuacoesMotores = calcularPontuacaoMotores();
    console.log("Pontuações das equipes:", pontuacoesMotores); // Log para depuração
    const pontuacaoWehrlein = getPontuacaoPorNome('Wehrlein');
    const pontuacaoEvans = getPontuacaoPorNome('Evans');
    const pontuacaoMahindraEquipe = pontuacoesEquipes.find(equipe => equipe.nome === 'Mahindra')?.pontuacao || 0;
    const pontuacaoMahindraM9 = pontuacoesMotores.find(motor => motor.nome === 'Mahindra M9')?.pontuacao || 0;

    const pontuacaoFrederic = pontuacoesTecnicos.find(tecnico => tecnico.nome === 'Frederic Bertrand')?.pontuacao || 0;
    const totalPontuacao = pontuacaoWehrlein + pontuacaoEvans + pontuacaoMahindraEquipe + pontuacaoMahindraM9 + pontuacaoFrederic;
    return (
        <div className='classPilotos'>
            <div className='escolhasUser'>
                <p>Pontuação Total: {totalPontuacao.toFixed(2)}</p>
                <ul>
                    <li>PILOTO1 - Wehrlein = {pontuacaoWehrlein}</li>
                    <li>PILOTO2 - Evans = {pontuacaoEvans}</li>
                    <li>EQUIPE - Mahindra = {pontuacaoMahindraEquipe}</li>
                    <li>MOTOR - Mahindra M9 = {pontuacaoMahindraM9}</li>
                    <li>CHEFE DE EQUIPE - Frederic Bertrand = {pontuacaoFrederic.toFixed(2)}</li> 
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
                <ul>
                    <h2>Pontuação dos Chefes de Equipe</h2>
                    {pontuacoesTecnicos.map(tecnico => (
                        <li key={tecnico.nome} className="piloto-item">
                            {tecnico.nome}: {tecnico.pontuacao.toFixed(2)} pontos
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};