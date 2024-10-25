// InfosAside.js
import Creditos from '../CreditosInfo';
import PontuacaoInfo from '../PontuacaoInfo';
import './style.css';

const InfosAside = () => {
  
  return (
      <div className="infos-aside">
          <div className="score-header">
              <Creditos />
              <PontuacaoInfo/>
          </div>
      </div>
  );
};

export default InfosAside;
