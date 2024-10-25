import { Corrida } from "../Corrida";
import { ClassPilotos } from "../ClassPilotos";
import { EstatisticasPro } from "../EstatisticasPro";
import { EstatisticasPerfil } from "../EstatisticasPerfil";
import './style.css'
import React, {useState} from 'react'

const Estatisticas = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
return (
  <div className="estatistica">
      <Corrida />
      <h1>Estatísticas da Corrida!</h1>
      <div className='tabela'>
          <ClassPilotos />
      </div>
      <EstatisticasPerfil />
      <button onClick={toggleVisibility}>
          {isVisible ? 'Sair dos Dados PRO' : 'Ativar Dados PRO'}
      </button>
      {isVisible && <EstatisticasPro />}
  </div>
);

};

export default Estatisticas;