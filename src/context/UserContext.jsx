import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const storageCreditos = localStorage.getItem('creditos');
  const storageEscolhas = localStorage.getItem('escolhas');

  const [creditos, setCreditos] = useState(storageCreditos ? Number(storageCreditos) : 50);
  const [escolhas, setEscolhas] = useState(storageEscolhas ? JSON.parse(storageEscolhas) : {
    piloto: null,
    equipe: null,
    tecnico: null,
  });

  useEffect(() => {
    localStorage.setItem('creditos', creditos);
  }, [creditos]);

  
  useEffect(() => {
    localStorage.setItem('escolhas', JSON.stringify(escolhas));
  }, [escolhas]);

  const descontarCreditos = (preco, tipo) => {
    const escolhaAnterior = escolhas[tipo];

    if (escolhaAnterior) {
      setCreditos((prevCreditos) => prevCreditos + escolhaAnterior.preco);
    }

    if (creditos >= preco) {
      setCreditos((prevCreditos) => prevCreditos - preco);

      setEscolhas((prevEscolhas) => ({
        ...prevEscolhas,
        [tipo]: { preco }, 
      }));
    } else {
      alert('Créditos insuficientes!');
    }
  };

  return (
    <UserContext.Provider value={{ creditos, descontarCreditos }}>
      {children}
    </UserContext.Provider>
  );
};
