import './style.css'
import { Routes, Route } from 'react-router-dom'
import { AoVivo } from '../AoVivo/index.jsx';
import { EntendaJogo } from '../EntendaJogo/index.jsx'
import { PaginaInicial } from '../PaginaInicial/index.jsx'
import Estatisticas from '../Estatisticas/index.jsx'
import { Ranking } from '../Ranking/index.jsx'
import { PRO } from '../Pro/index.jsx'
import { Escalacao } from '../Escalacao/index.jsx'


export const TelaPrincipal = () => {
    return (
        <div className="tela-principal">
            <Routes>
                <Route path='/' element={<PaginaInicial />}></Route>
                <Route path='/pro' element={<PRO />}></Route>
                <Route path='/escalacao' element={<Escalacao />}></Route>
                <Route path='/estatisticas' element={<Estatisticas />}></Route>
                <Route path='/conversas' element={<AoVivo />}></Route>
                <Route path='/entendaojogo' element={<EntendaJogo />}></Route>
                <Route path='/ranking' element={<Ranking />}></Route>
            </Routes>
        </div>
        
    )
}