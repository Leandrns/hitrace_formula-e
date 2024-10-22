import Creditos from '../CreditosInfo'; // Caminho correto
import Pontuacao from '../PontuacaoInfo'; // Caminho correto
import './style.css'; // Importa o estilo local
import { PontuacaoProvider } from '../../context/PontuacaoContext';


const InfosAside = () => {
  return (
    <div className="infos-aside">
      <div className="score-header">
        <Creditos />
        <PontuacaoProvider>
        <Pontuacao/>
        </PontuacaoProvider>
      </div>
    </div>
  );
};

export default InfosAside;