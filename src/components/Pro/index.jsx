import styled from "styled-components"
import pro from '../../images/pro.svg'

export const PaginaPro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Titulo = styled.div`
    width: 100%;
    padding: 30px 0;
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;

    img{
        height: 150px;
    }
`

export const Centralizacao = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    background-image: url(${() => require('../../images/proHeader.png')});
    background-size: cover;
    background-position: center;
    height: 500px;
    border-radius: 100px;

    button{
    position: absolute;
    height: 50px;
    width: 200px;
    background: linear-gradient(135deg, #ebc417, #ad8e00);
    color: white;

    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    font-family: 'Mina';
    bottom: 155px;

  &:hover {
    background: linear-gradient(135deg, #ad8e00, #ebc417);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
    }
`


export const PRO = (props) => {
    return(
        <PaginaPro>
            <Titulo><img src={pro} alt="HitRace PRO"/></Titulo>
            <Centralizacao><button>Inscreva-se</button></Centralizacao>
        </PaginaPro>
    )
}