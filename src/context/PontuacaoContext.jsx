// PontuacaoContext.js
import React, { createContext, useState } from 'react';

export const PontuacaoContext = createContext();

export const PontuacaoProvider = ({ children }) => {
    const [pontuacaoTotal, setPontuacaoTotal] = useState(0);

    const adicionarPontuacao = (valor) => {
        setPontuacaoTotal((prevTotal) => prevTotal + valor);
    };

    return (
        <PontuacaoContext.Provider value={{ pontuacaoTotal, adicionarPontuacao }}>
            {children}
        </PontuacaoContext.Provider>
    );
};
