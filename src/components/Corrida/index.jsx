import { useEffect, useState } from 'react';
import './style.css';

export const Corrida = () => {
    const [voltas, setVoltas] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setVoltas(prevVoltas => {
                if (prevVoltas < 37) {
                    return prevVoltas + 1; // Incrementa o número de voltas
                } else {
                    clearInterval(intervalo); // Para o contador ao atingir 37 voltas
                    return prevVoltas; // Retorna o número final de voltas
                }
            });
        }, 800); // 800ms para contar até 37 em 30 segundos

        return () => {
            clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
        };
    }, []);

    return (
        <div className='corrida'>
            <div className="dadosCorrida">
                <h2>E-prix de Londres</h2>
                <p>21 de Julho de 2024</p>
                <p>Etapa 16</p>
                <p>Corrida em andamento</p>
                <p>Voltas: {voltas}/37</p>
            </div>
        </div>
    );
};
