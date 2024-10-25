// src/components/PontuacaoInfo.jsx
import React, { useEffect, useState } from 'react';

const PontuacaoInfo = () => {
    const [pontuacaoTotal, setPontuacaoTotal] = useState(0);

    useEffect(() => {
        // Recuperar do localStorage
        const storedPontuacaoTotal = localStorage.getItem('pontuacaoTotal');
        if (storedPontuacaoTotal) {
            setPontuacaoTotal(parseFloat(storedPontuacaoTotal));
        }
    }, []);
    return(
        <div className="score-item">
            <h4>Pontuação</h4> 
            <p>{pontuacaoTotal}</p>
        </div>
    )
};

export default PontuacaoInfo;
