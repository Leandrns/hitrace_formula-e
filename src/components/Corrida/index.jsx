import { useEffect, useState } from 'react';
import './style.css';

export const Corrida = () => {
    const [voltas, setVoltas] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setVoltas(prevVoltas => {
                if (prevVoltas < 37) {
                    return prevVoltas + 1; 
                } else {
                    clearInterval(intervalo); 
                    return prevVoltas; 
                }
            });
        }, 800); 

        return () => {
            clearInterval(intervalo); 
        };
    }, []);

    return (
        <div className='corrida'>
            <div className='mapa'>
                <img src='./stop_normal.gif'/>
            </div>
            <div className="dadosCorrida">
                <h2>E-prix de Londres</h2>
                <p>20 de Julho de 2024</p>
                <p>Etapa 16</p>
                <p>Voltas: {voltas}/37</p>
            </div>
        </div>
    );
};
