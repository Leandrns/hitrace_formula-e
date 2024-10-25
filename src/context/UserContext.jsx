import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const storageCreditos = localStorage.getItem('creditos');
  const storageEscolhas = localStorage.getItem('escolhas');

  const [creditos, setCreditos] = useState(storageCreditos ? Number(storageCreditos) : 80);
  const [escolhas, setEscolhas] = useState(storageEscolhas ? JSON.parse(storageEscolhas) : {
    piloto1: null,
    piloto2: null,
    tecnico: null,
    equipe: null,
    motor: null,
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

  const devolverCreditos = () => {
    let totalCreditosDevolvidos = 0;

    // Somar os créditos das escolhas que estavam preenchidas
    Object.values(escolhas).forEach((escolha) => {
      if (escolha) {
        totalCreditosDevolvidos += escolha.preco;
      }
    });

    // Atualizar créditos e limpar as escolhas
    setCreditos((prevCreditos) => prevCreditos + totalCreditosDevolvidos);
    setEscolhas({
      piloto1: null,
      piloto2: null,
      tecnico: null,
      equipe: null,
      motor: null,
    });
  };

  return (
    <UserContext.Provider value={{ creditos, setCreditos, descontarCreditos, devolverCreditos }}>
      {children}
    </UserContext.Provider>
  );
};

