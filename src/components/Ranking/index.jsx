import { LinhaRanking } from "../LinhaRanking";
import "./style.css";

export const Ranking = (props) => {
    const linhas = [];

    for (let i = 1; i <= 15; i++) {
        linhas.push(
            <LinhaRanking
                key={i}
                numero={i}
                usuario={`user${i}`}
                melhor="000pts"
                total="0000pts"
            />
        );
    }

    console.log(linhas); // Para verificar o conteúdo das linhas

    return (
        <div className="tela_ranking">
            <section className="titulo_pontuacao">
                <h2>Ranking Brasil</h2> <img src="https://em-content.zobj.net/source/toss-face/381/flag-brazil_1f1e7-1f1f7.png" alt="Bandeira" className="bandeira" />
            </section>
            <div className="rankHR">
                <table className="borda">
                    <thead>
                        <tr>
                            <th>º</th>
                            <th className="esquerda">Usuário</th>
                            <th className="esquerda">Melhor rodada</th>
                            <th className="esquerda">Pontuação total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {linhas.map((linha) => linha)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
