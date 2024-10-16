import Button from '../BtnNav'; // Verifique se o caminho está correto
import './style.css';

const NavButtons = ( {telaAtiva, setTelaAtual} ) => {
    const buttons = [
        { text: 'HitRace PRO', id: 'tela0'},
        { text: 'Escale sua equipe', id: 'tela1' },
        { text: 'Estatísticas', id: 'tela2' }, 
        { text: 'Conversas', id: 'tela3' }, 
        { text: 'Entenda o jogo', id: 'tela4' }, 
        { text: 'Ranking', id: 'tela5'}
    ];
        
    return (
        <div className="nav-buttons">
            {buttons.map((button) => (
                <Button key={button.id} 
                        text={button.text}
                        isActive={telaAtiva === button.id}
                        onClick={() => {
                            setTelaAtual(button.id)
                        }} />
            ))}
        </div>
    );
};

export default NavButtons;
