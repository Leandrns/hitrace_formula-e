import { Corrida } from "../Corrida";
import { ClassPilotos } from "../ClassPilotos";
import { ClassGeral } from "../ClassGeral";
import './style.css'

const Estatisticas = () => {
  return (
    <div className="estatistica">
      <Corrida />
      
      <h1>Estatísticas</h1>
      <div className='tabela'>
        <ClassPilotos />
        
      </div>
      
    </div>
  )
}
export default Estatisticas;
