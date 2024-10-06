import { BlocoEntendaJogo } from "../BlocoEntendaJogo";
import "./style.css"

export const EntendaJogo = (props) => {
    return(
        <div className="tela_entenda">
            <p>O <b>HitRace</b> é o fantasy game da Fórmula E, a maior corrida de carros elétricos do mundo! Nesse jogo você pode sentir energia da competição de forma totalmente interativa.
            À esquerda da sua interface você tem quatro seções para explorar. Vamos começar pela “Escale sua equipe”!</p><br />
            <BlocoEntendaJogo titulo="Escale sua equipe" descricao="É nessa seção que você aplica todos os seus conhecimentos sobre a Fórmula E para montar a sua equipe do seu jeito, buscando alcançar a maior quantidade de pontos possível. Para fazer sua escalação, você deve escolher dois pilotos, uma equipe para representar, um motor, e um técnico.
Você pode criar sua escalação antes de cada rodada da competição, e sua pontuação é calculada de acordo com o desempenho de cada um dos seus componentes na corrida.
Ao criar sua conta você recebe 100 créditos para fazer suas escolhas, porém, sua pontuação em cada rodada é convertida em um acréscimo (ou perda) de créditos." /><br />
            <BlocoEntendaJogo titulo="Estatísticas" descricao="Aqui você pode acompanhar o desenvolvimento da corrida enquanto ela acontece, com dados como: a colocação dos pilotos a cada volta; a velocidade e o nível de bateria de cada carro; além de algumas notícias sobre o circuito, equipes, etc. O objetivo dessa seção é te deixar informado sobre os acontecimentos da corrida e te ajudar a escalar a equipe perfeita!" /><br />
            <BlocoEntendaJogo titulo="Ranking" descricao="Por fim, você pode acessar a seção “Ranking” para saber como está o seu desempenho na temporada quando comparado com os outros players do HitRace. O jogador que tiver a melhor pontuação da temporada irá ganhar alguns prêmios... " /><br /><br />
            <p>Agora é a sua hora de descobrir o universo da Fórmula E! </p>
        </div>
    )
}