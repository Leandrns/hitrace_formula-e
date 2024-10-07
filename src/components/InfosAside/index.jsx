import Creditos from '../CreditosInfo'; // Caminho correto
import Pontuacao from '../PontuacaoInfo'; // Caminho correto
import './style.css'; // Importa o estilo local


const InfosAside = () => {
  return (
    <div className="infos-aside">
      <div className="score-header">
        <Creditos />
        <Pontuacao
                pontuacaoWehrlein={0}
                pontuacaoEvans={0}
                pontuacaoMahindra={0}
                pontuacaoMahindraBio={0}
            />
      </div>
    </div>
  );
};

export default InfosAside;