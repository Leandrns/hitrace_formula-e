import { useEffect, useState, useContext } from 'react'; 
import { UserChoicesContext } from '../../context/UserChoicesContext';
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

export const ClassPilotos = ({ piloto1Nome, piloto2Nome, tecnicoNome, equipeNome, motorNome }) => {

    const { piloto1, piloto2, equipe, motor, chefe, pontuacaoPiloto1, pontuacaoPiloto2, pontuacaoEquipe, pontuacaoMotor, pontuacaoChefe } = useContext(UserChoicesContext);
    const totalPontuacao = pontuacaoPiloto1 + pontuacaoPiloto2 + pontuacaoEquipe + pontuacaoMotor + pontuacaoChefe;

    const [baterias, setBaterias] = useState(pilotos.map(p => ({ ...p, bateria: 100 })));
    const [posicoes, setPosicoes] = useState(pilotos.map((p, index) => ({ ...p, posicao: index + 1 })));
    const [pontuacoes, setPontuacoes] = useState(Array(pilotos.length).fill(0));
    const [corridaAtiva, setCorridaAtiva] = useState(true);
    

    useEffect(() => {
        const interval = setInterval(() => {
            if (!corridaAtiva) return;

            setBaterias(prevBaterias => prevBaterias.map(p => ({
                ...p,
                bateria: Math.max(p.bateria - (100 / (30 * (1000 / 500))), 4)
            })));

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
        setPontuacoes(posicoes.map((piloto, index) => {
            const posicao = piloto.posicao - 1;
            return pontuacaoPorPosicao[posicao] || 0;
        }));
    }, [posicoes]);

    const calcularPontuacaoTotal = () => {
        return pontuacaoPiloto1 + pontuacaoPiloto2 + pontuacaoEquipe + pontuacaoMotor + pontuacaoChefe;
    };

    const calcularPontuacaoEquipes = () => {
        return equipes.map(equipe => {
            const pontuacaoTotal = equipe.pilotos.reduce((total, pilotoNome) => total + getPontuacaoPorNome(pilotoNome), 0);
            return { nome: equipe.nome, pontuacao: pontuacaoTotal };
        });
    };

    const calcularPontuacaoMotores = () => {
        return motores.map(motor => {
            const pontuacaoTotal = motor.equipes.reduce((total, equipeNome) => {
                const equipe = equipes.find(equipe => equipe.nome === equipeNome);
                return total + (equipe ? equipe.pilotos.reduce((acc, pilotoNome) => acc + getPontuacaoPorNome(pilotoNome), 0) : 0);
            }, 0);
            return { nome: motor.nome, pontuacao: pontuacaoTotal };
        });
    };

    const calcularPontuacaoTecnicos = () => {
        return tecnico.map(tecnico => {
            const pontuacaoEquipe = equipes.reduce((total, equipe) => {
                return total + (tecnico.componentes.includes(equipe.nome) ? calcularPontuacaoEquipes().find(e => e.nome === equipe.nome)?.pontuacao || 0 : 0);
            }, 0);
            return { nome: tecnico.nome, pontuacao: pontuacaoEquipe / 3 }; // Divisão para ajustar a pontuação
        });
    };

    const getPontuacaoPorNome = (nome) => {
        const index = posicoes.findIndex(p => p.nome === nome);
        return index !== -1 ? pontuacoes[index] : 0;
    };

    const pontuacoesEquipes = calcularPontuacaoEquipes();
    const pontuacoesMotores = calcularPontuacaoMotores();
    const pontuacoesTecnicos = calcularPontuacaoTecnicos();

    return (
        <div className='classPilotos'>
            <div className='escolhasUser'>
            <p>Pontuação Total: {calcularPontuacaoTotal()}</p>
            <ul>
                <li>PILOTO 1 - {piloto1 ? piloto1.nome : 'Não selecionado'} = {pontuacaoPiloto1}</li>
                <li>PILOTO 2 - {piloto2 ? piloto2.nome : 'Não selecionado'} = {pontuacaoPiloto2}</li>
                <li>EQUIPE - {equipe ? equipe.nome : 'Não selecionada'} = {pontuacaoEquipe}</li>
                <li>MOTOR - {motor ? motor.nome : 'Não selecionado'} = {pontuacaoMotor}</li>
                <li>CHEFE DE EQUIPE - {chefe ? chefe.nome : 'Não selecionado'} = {pontuacaoChefe.toFixed(2)}</li>
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
                    <h2>Pontuação dos Chefes</h2>
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