import "./style.css"
import { LinhaRanking } from "../LinhaRanking"

export const Ranking = (props) => {
    return(
        <div className="tela_ranking">
            <h2>Ranking Brasil 	&#x1f1e7;&#x1f1f7;</h2>
            <div className="borda">
                <div className="topo">
                <h3>º</h3><h3>Usuário</h3><h3>Melhor rodada</h3><h3>Pontuação total</h3>
                </div>
                <LinhaRanking numero="1" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="2" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="3" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="4" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="5" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="6" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="7" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="8" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="9" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="10" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="11" usuario="user1" melhor="000pts" total="0000pts"/>
                <LinhaRanking numero="12" usuario="user1" melhor="000pts" total="0000pts"/>
                <div className="fim">
                    <button className="btn">Carregar mais usuários...</button>
                </div>
            </div>
        </div>
    )
}