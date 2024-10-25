import './App.css';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { TelaPrincipal } from './components/TelaPrincipal';
import { UserProvider } from './context/UserContext';
import { useEffect, useState } from 'react';

function App() {
    const [telaAtual, setTelaAtual] = useState('');

    useEffect(() => {
        const aside = document.querySelector('.aside');
        const openAside = document.querySelector('.openAside');

        openAside.addEventListener('click', () => {
            aside.classList.toggle('open');
        });

        return () => {
            if (openAside) {
                openAside.removeEventListener('click', () => {
                    aside.classList.toggle('open');
                });
            }
        };
    }, []);

    return (
        <UserProvider>
            <div className="App">
                <Header />
                <div className="containerHR">
                    <Aside telaAtiva={telaAtual} setTelaAtual={setTelaAtual} />
                    <TelaPrincipal telaAtiva={telaAtual} />
                </div>
            </div>
        </UserProvider>
    );
}

export default App;