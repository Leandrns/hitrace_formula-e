import './style.css'
import imageProfile from '../../images/imageProfile.svg'

export const EstatisticasPerfil = () => {
    return(
        <div className='infoEst'>
            <div className='perfilEst'>
                <img src={imageProfile} alt="Foto de Perfil" />
                <h4>Nome de Usuário</h4>
            </div>
            <div className='historico'>
                <div className='pontos'>
                    <h5>Última Pontuação</h5>
                    <p>103.4</p>
                </div>
                <div className='melhorPontos'>
                    <h5>Melhor Pontuação</h5>
                    <p>145</p>
                </div>
                <div className='melhorPontos'>
                    <h5>Seu Ranking atual</h5>
                    <p>Mestre</p>
                </div>


            </div>
        </div>
    )
}