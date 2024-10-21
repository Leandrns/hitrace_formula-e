import styled from "styled-components"
import pro from '../../images/pro.svg'
import pro_branco from '../../images/pro_branco.svg'
import bot from '../../images/bot_card.png'
import estatistica from '../../images/estat_card.png'
import upgrade from '../../images/upgrade_card.png'
import ads from '../../images/ads_card.png'
import live from '../../images/live_card.png'
import rank from '../../images/rank_card.png'

export const PaginaPro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Michroma';
        padding: 70px 10px 30px 10px;
        color: #ebc417;
        font-size: 50px;
        text-align: center;
    }
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
    }

    h3{
        font-family: 'Michroma';
        font-size: 28px;
        padding-bottom: 17px;
    }

    h4{
        font-size: 23px;
        padding-bottom: 4px;
    }
    
    i{
        font-size: 30px;
    }
    p{
        font-size: 20px;
        font-family: 'Mina';
        display: flex;
        align-items: center;
        padding-bottom: 12px;
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
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    
    
    img{
        padding: 10px 0;
    }

    div.cartao{
        background-color: #CFCFCF;
        height: 400px;
        width: 300px;
        border-radius: 50px;
        transition: all 0.3s ease;
        
        &:hover{
            box-shadow: 0px 0px 20px #636363;
            scale: 1.1;
        }
    }

    div.textos{
        color: white;
        text-align: center;
    }

    div.textos h5{
        font-size: 28px;
    }

    div.textos p{
        font-size: 20px;
        padding: 0 10px;
    }
`


export const PRO = (props) => {
    return(
        <PaginaPro>
            <Titulo><img src={pro} alt="HitRace PRO"/></Titulo>
            <Centralizacao><button>Inscreva-se</button></Centralizacao>
                <Planos>
                    <Opcoes botao='linear-gradient(135deg, #46DEFF, #2d8ea3);' btnhover='linear-gradient(135deg, #2d8ea3, #46DEFF);' >
                        <img src={pro_branco} alt="HitRace PRO"/>
                        <h3>O BÁSICO</h3>
                        <h4>R$ 8,90 / mês</h4>
                        <p>(Aplicável a somente uma modalidade)</p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Acesso ao bot
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Estatísticas exclusivas durante as corridas
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Ganhe upgrades semanalmente
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Jogue sem anúncios
                        </p>
                        <button >ASSINAR</button>
                    </Opcoes>
                    <Opcoes fundo='linear-gradient(135deg, #ebc417, #000);'>
                        <img src={pro_branco} alt="HitRace PRO"/>
                        <h3>TODAS AS VANTAGENS</h3>
                        <h4>R$ 24,99 / mês</h4>
                        <p>Tudo que está incluso no Básico, além de</p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Bot e estatísticas para TODAS as modalidades
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Transmissão ao vivo das corridas
                        </p>
                        <p>
                        <i class="bi bi-check2"></i>
                        Tenha a chance de receber prêmios exclusivos de acordo com sua colocação no ranking
                        </p>
                        <button>ASSINAR</button>
                    </Opcoes>
                </Planos>
                <h1>Vantagens PRO favoritas</h1>
                <CardsPro>
                    <div className="cartao">
                        <img src={bot} alt="Bot HitRace" />
                        <div className="textos">
                            <h5>Use o Bot</h5>
                            <p>O nosso bot ajuda a você tomar as melhores decisões dentro do HitRace!</p>
                        </div>
                    </div>
                    <div className="cartao">
                        <img src={estatistica} alt="Bônus Estatistica" />
                        <div className="textos">
                            <h5>Estatísticas Exclusivas</h5>
                            <p>Acesso a novas estatísticas que ajudam a melhorar suas escolhas.</p>
                        </div>
                    </div>
                    <div className="cartao">
                        <img src={upgrade} alt="Upgrade Semanal" />
                        <div className="textos">
                            <h5>Upgrade Semanal</h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="cartao">
                        <img src={ads} alt="Sem Anúncios" />
                        <div className="textos">
                            <h5>Nada de Anúncios</h5>
                            <p>Se livre dos anúncios do nosso jogo.</p>
                        </div>
                    </div>
                    <div className="cartao">
                        <img src={live} alt="Bot HitRace" />
                        <div className="textos">
                            <h5>Assista AO VIVO</h5>
                            <p>Assista a as corridas enquanto monta sua equipe para a próxima corrida.</p>
                        </div>
                    </div>
                    <div className="cartao">
                        <img src={rank} alt="Bot HitRace" />
                        <div className="textos">
                            <h5>Ganhe Prêmios</h5>
                            <p>Jogue e fique entre os melhores para receber recompensas!</p>
                        </div>
                    </div>
                </CardsPro>
        </PaginaPro>
    )
}