import { Corrida } from "../Corrida";
import { ClassPilotos } from "../ClassPilotos";
import { EstatisticasPro } from "../EstatisticasPro";
import { EstatisticasPerfil } from "../EstatisticasPerfil";
import { UserChoicesProvider } from '../../context/UserChoicesContext';
import './style.css'
import React, {useState} from 'react'

const Estatisticas = () => {
  const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
  return (
    <div className="estatistica">
      <Corrida />
      
      <h1>Estatísticas da Corrida!</h1>
      <div className='tabela'>

      <UserChoicesProvider>
        <ClassPilotos />
      </ UserChoicesProvider> 
      
      </div>
      <EstatisticasPerfil />
      <button onClick={toggleVisibility}>
        {isVisible ? 'Esconder Dados PRO':'Ver Dados PRO'}
      </button>
      {isVisible && <EstatisticasPro />}
      
    </div>
  )
}
export default Estatisticas;
