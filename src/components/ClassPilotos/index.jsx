import { useEffect, useState, useContext } from 'react'; 
import { UserChoicesContext } from '../../context/UserChoicesContext';
import './style.css';
import corridaDados from '../../json/dados.json'

export const ClassPilotos = () => {

    const { piloto1, piloto2, equipe, motor, chefe, pontuacaoPiloto1, pontuacaoPiloto2, pontuacaoEquipe, pontuacaoMotor, pontuacaoChefe } = useContext(UserChoicesContext);
    const totalPontuacao = pontuacaoPiloto1 + pontuacaoPiloto2 + pontuacaoEquipe + pontuacaoMotor + pontuacaoChefe;

    const pilotos = corridaDados.pilotos1;
    const pontuacaoPorPosicao = corridaDados.pontuacaoPorPosicao;
    const equipes = corridaDados.equipes;
    const motores = corridaDados.motores;
    const tecnico = corridaDados.tecnicos;

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