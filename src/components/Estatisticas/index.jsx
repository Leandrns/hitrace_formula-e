import { Corrida } from "../Corrida";
import { ClassPilotos } from "../ClassPilotos";
import { EstatisticasPro } from "../EstatisticasPro";
import { EstatisticasPerfil } from "../EstatisticasPerfil";
import { UserChoicesProvider } from '../../context/UserChoicesContext';
import './style.css'

const Estatisticas = () => {
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
      <EstatisticasPro />
    </div>
  )
}
export default Estatisticas;
