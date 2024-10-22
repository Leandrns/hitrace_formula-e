import { createContext, useState } from 'react';

export const UserChoicesContext = createContext();

export const UserChoicesProvider = ({ children }) => {
    const [piloto1, setPiloto1] = useState(null);
    const [piloto2, setPiloto2] = useState(null);
    const [equipe, setEquipe] = useState(null);
    const [motor, setMotor] = useState(null);
    const [chefe, setChefe] = useState(null);
    const [pontuacaoPiloto1, setPontuacaoPiloto1] = useState(0);
    const [pontuacaoPiloto2, setPontuacaoPiloto2] = useState(0);
    const [pontuacaoEquipe, setPontuacaoEquipe] = useState(0);
    const [pontuacaoMotor, setPontuacaoMotor] = useState(0);
    const [pontuacaoChefe, setPontuacaoChefe] = useState(0);
    return (
        <UserChoicesContext.Provider value={{
            piloto1, setPiloto1,
            piloto2, setPiloto2,
            equipe, setEquipe,
            motor, setMotor,
            chefe, setChefe,
            pontuacaoPiloto1, setPontuacaoPiloto1,
            pontuacaoPiloto2, setPontuacaoPiloto2,
            pontuacaoEquipe, setPontuacaoEquipe,
            pontuacaoMotor, setPontuacaoMotor,
            pontuacaoChefe, setPontuacaoChefe,
            
        }}>
            {children}
        </UserChoicesContext.Provider>
    );
};
