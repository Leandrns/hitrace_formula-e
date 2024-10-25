import Button from '../BtnNav'; // Verifique se o caminho está correto
import './style.css';

const NavButtons = () => {
    const buttons = [
        { text: 'HitRace PRO', id: 'tela0', path: "/pro" },
        { text: 'Escale sua equipe', id: 'tela1', path: "/escalacao" },
        { text: 'Estatísticas', id: 'tela2', path: "/estatisticas" }, 
        { text: 'Conversas', id: 'tela3', path: "/conversas" }, 
        { text: 'Entenda o jogo', id: 'tela4', path: "/entendaojogo" }, 
        { text: 'Ranking', id: 'tela5', path: "/ranking" }
    ];
        
    return (
        <div className="nav-buttons">
            {buttons.map((button) => (
                <Button key={button.id} 
                        text={button.text}
                        path={button.path} />
            ))}
        </div>
    );
};

export default NavButtons;
