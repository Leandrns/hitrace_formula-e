import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PilotosGrid = () => {
  const [pilotos, setPilotos] = useState([]);

  // Função para buscar dados da API
  const fetchPilotos = async () => {
    try {
      const response = await axios.get('https://api.sportradar.com/formulae/trial/v2/en/competitors/sr:competitor:422427/profile.json', {
        headers: {
          'api_key': 'api_key'  
        }
      });
      setPilotos(response.data); 
    } catch (error) {
      console.error('Erro ao buscar pilotos:', error);
    }
  };

  // Chama a função quando o componente é montado
  useEffect(() => {
    fetchPilotos();
  }, []);

  return (
    <div>
      <h1>Lista de Pilotos</h1>
      {pilotos.length > 0 ? (
        <ul>
          {pilotos.map((piloto) => (
            <li key={piloto.id}>{piloto.name}</li>
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default PilotosGrid;
