import styled from "styled-components"
import pro from '../../images/pro.svg'
import pro_branco from '../../images/pro_branco.svg'


export const PaginaPro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Titulo = styled.div`
    padding: 30px 10px 0px 10px;
    text-align: center;
    margin: 0;

    img{
        width: 100%;
        height: 150px;
    }
`

export const Centralizacao = styled.div`
position: relative;
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
    margin-bottom: 50px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    font-family: 'Mina';
    bottom: 0;

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

    @media (max-width: 1137px) {
        width: 100%;
        height: 400px;
        button{
            margin-bottom: 30px;
        }
    }

    @media (max-width: 500px){
        background-image: url(${() => require('../../images/proCelular.png')});
        button{
            margin-bottom: 60px;
        }
    }
`

export const Planos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 50px;
    gap: 70px;

    
`

export const Opcoes = styled.section`
    position: relative;
    width: 400px;
    height: 700px;
    border-radius: 60px;
    background: ${props => props.fundo || '#0E29B4;'};
    font-size: 18px;
    color: white;
    padding: 30px 50px 0px 50px;
    
    img{
        width: 100%;
        height: 50px;
        margin-left: 13px;
        margin-bottom: 4px;
    }

    h3{
        font-family: 'Michroma';
        font-size: 28px;
    }

    h4{
        font-size: 23px;
    }
    
    i{
        font-size: 30px;
    }
    p{
        font-size: 20px;
        font-family: 'Mina';
        display: flex;
        align-items: center;
        padding-bottom: 15px;
    }
    button{
    position: absolute;
    height: 50px;
    width: 300px;
    background: ${props => props.botao || 'linear-gradient(135deg, #ebc417, #ad8e00);'};
    color: white;
    margin-bottom: 25px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    font-family: 'Mina';
    bottom: 0;

  &:hover {
    background: ${props => props.btnhover || 'linear-gradient(135deg, #ad8e00, #ebc417);'}; 
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
    }
    

    @media (max-width: 449px) {
        width: 100%;
        button{
            width: 265px;
            
        }
    }
`

export const CardsPro = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
`


export const PRO = (props) => {
    return(
        <PaginaPro>
            <Titulo><img src={pro} alt="HitRace PRO"/></Titulo>
            <Centralizacao><button>Inscreva-se</button></Centralizacao>
                <Planos>
                    <Opcoes botao='linear-gradient(135deg, #46DEFF, #2d8ea3);' btnhover='linear-gradient(135deg, #2d8ea3, #46DEFF);' >
                        <img src={pro_branco} alt="HitRace PRO"/>
                        <h3>O BÁSICO</h3><br />
                        <h4>R$ 8,90 / mês</h4>
                        <p>
                        <i class="bi bi-check2"></i>
                        Mais de
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Mais de
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Mais de
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Mais de
                        </p>
                        <button >ASSINAR</button>
                    </Opcoes>
                    <Opcoes fundo='linear-gradient(135deg, #ebc417, #000);'>
                        <img src={pro_branco} alt="HitRace PRO"/>
                        <h3>TODAS AS VANTAGENS</h3><br />
                        <h4>R$ 24,99 / mês</h4>
                        <p>
                        <i class="bi bi-check2"></i>
                        Mais de
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Mais de
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Mais de
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Mais de
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Mais de
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Mais de
                        </p>
                        <button>ASSINAR</button>
                    </Opcoes>
                </Planos>
                <CardsPro>
                    {/* <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div> */}
                </CardsPro>
        </PaginaPro>
    )
}