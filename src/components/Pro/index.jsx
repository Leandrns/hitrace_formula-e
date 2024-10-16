import styled from "styled-components"
import proHeader from '../../images/proHeader.png'

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`

export const Centralizacao = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Topo = styled.img`

`

export const PRO = (props) => {
    return(
        <div>
            <Titulo cor="#ebc417" tamanhoFonte="60px">HitRace PRO</Titulo>
            <Centralizacao><Topo> src={proHeader} alt="" className="img" </Topo></Centralizacao>
        </div>
    )
}