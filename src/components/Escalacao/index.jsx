import styled from "styled-components"
import { Escolhas } from "../Escolhas"
import { InfosCorrida } from "../InfosCorrida"
import { ListaOpcoes } from "../ListaOpcoes"
import { TimerMercado } from "../TimerMercado"
import { useState } from "react"
import dados from '../../json/dados.json'

const BoxInfos = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    flex-wrap: wrap;
`

export const Escalacao = () => {
    localStorage.setItem('pilotos1', JSON.stringify(dados.pilotos1));
    localStorage.setItem('pilotos2', JSON.stringify(dados.pilotos2));
    localStorage.setItem('tecnicos', JSON.stringify(dados.tecnicos));
    localStorage.setItem('equipes', JSON.stringify(dados.equipes));
    localStorage.setItem('motores', JSON.stringify(dados.motores));

    let piloto1 = JSON.parse(localStorage.getItem('piloto1')) || false;
    let piloto2 = JSON.parse(localStorage.getItem('piloto2')) || false;
    let tecnico = JSON.parse(localStorage.getItem('tecnico')) || false;
    let equipe = JSON.parse(localStorage.getItem('equipe')) || false;
    let motor = JSON.parse(localStorage.getItem('motor')) || false;

    let pilotos1Storage = JSON.parse(localStorage.getItem('pilotos1'));
    let pilotos2Storage = JSON.parse(localStorage.getItem('pilotos2'));
    let tecnicosStorage = JSON.parse(localStorage.getItem('tecnicos'));
    let equipesStorage = JSON.parse(localStorage.getItem('equipes'));
    let motoresStorage = JSON.parse(localStorage.getItem('motores'));
    
    if(piloto1) {
        pilotos1Storage = pilotos1Storage.filter(piloto => piloto.id !== piloto1[0].id);
        pilotos2Storage = pilotos2Storage.filter(piloto => piloto.id !== piloto1[0].id);
    }
    
    if(piloto2) {
        pilotos2Storage = pilotos2Storage.filter(piloto => piloto.id !== piloto2[0].id);
        pilotos1Storage = pilotos1Storage.filter(piloto => piloto.id !== piloto2[0].id);
    }
    if(tecnico) {
        tecnicosStorage = tecnicosStorage.filter(t => t.id !== tecnico[0].id);
    }
    if(equipe) {
        equipesStorage = equipesStorage.filter(e => e.id !== equipe[0].id);
    }
    if(motor) {
        motoresStorage = motoresStorage.filter(m => m.id !== motor[0].id);
    }

    localStorage.setItem('pilotos1', JSON.stringify(pilotos1Storage))
    localStorage.setItem('pilotos2', JSON.stringify(pilotos2Storage))
    localStorage.setItem('tecnicos', JSON.stringify(tecnicosStorage))
    localStorage.setItem('equipes', JSON.stringify(equipesStorage))
    localStorage.setItem('motores', JSON.stringify(motoresStorage))

    const [exibirListaPilotos1, setExibirListaPilotos1] = useState(false);
    const [exibirListaPilotos2, setExibirListaPilotos2] = useState(false);
    const [exibirListaTecnicos, setExibirListaTecnicos] = useState(false);
    const [exibirListaEquipes, setExibirListaEquipes] = useState(false);
    const [exibirListaMotores, setExibirListaMotores] = useState(false);

    const renderizarListaPilotos1 = () => {
        setExibirListaPilotos1(true);
    }
    const fecharListaPilotos1 = () => {
        setExibirListaPilotos1(false);
    }

    const renderizarListaPilotos2 = () => {
        setExibirListaPilotos2(true);
    }
    const fecharListaPilotos2 = () => {
        setExibirListaPilotos2(false);
    }

    const renderizarListaTecnicos = () => {
        setExibirListaTecnicos(true);
    }
    const fecharListaTecnicos = () => {
        setExibirListaTecnicos(false);
    }

    const renderizarListaEquipes = () => {
        setExibirListaEquipes(true);
    }
    const fecharListaEquipes = () => {
        setExibirListaEquipes(false);
    }

    const renderizarListaMotores = () => {
        setExibirListaMotores(true);
    }
    const fecharListaMotores = () => {
        setExibirListaMotores(false);
    }

    return (
        <div className='escalacao'>
            <BoxInfos>
                <InfosCorrida />
                <TimerMercado />
            </BoxInfos>
            <Escolhas 
                exibirListaPilotos1={renderizarListaPilotos1}
                exibirListaPilotos2={renderizarListaPilotos2}
                exibirListaTecnicos={renderizarListaTecnicos}
                exibirListaEquipes={renderizarListaEquipes}
                exibirListaMotores={renderizarListaMotores}/>

            {exibirListaPilotos1 && <ListaOpcoes 
                                opcoes={pilotos1Storage}
                                titulo="Escolha seu Piloto 1"
                                onClose={fecharListaPilotos1}/>}

            {exibirListaPilotos2 && <ListaOpcoes 
                                opcoes={pilotos2Storage}
                                titulo="Escolha seu Piloto 2"
                                onClose={fecharListaPilotos2}/>}

            {exibirListaTecnicos && <ListaOpcoes 
                                opcoes={tecnicosStorage}
                                titulo="Escolha seu Chefe de Equipe"
                                onClose={fecharListaTecnicos}/>}

            {exibirListaEquipes && <ListaOpcoes 
                                opcoes={equipesStorage}
                                titulo="Escolha sua Equipe"
                                onClose={fecharListaEquipes}/>}

            {exibirListaMotores && <ListaOpcoes 
                                opcoes={motoresStorage}
                                titulo="Escolha seu Motor"
                                onClose={fecharListaMotores}/>}
        </div>
    )
}