import './style.css';

const Pontuacao = ({ pontuacaoWehrlein, pontuacaoEvans, pontuacaoMahindra, pontuacaoMahindraBio }) => {
    return (
      <div className="score-item">
        <h4>Pontuação</h4>
        <p>{pontuacaoWehrlein + pontuacaoEvans + pontuacaoMahindra + pontuacaoMahindraBio}</p>
        <p></p>
      </div>
    );
};

export default Pontuacao; // Certifique-se de que o componente está sendo exportado corretamente
