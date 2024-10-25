import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { TelaPrincipal } from './components/TelaPrincipal';
import { UserProvider } from './context/UserContext';
import { useEffect } from 'react';

function App() {
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
        <Router>
            <UserProvider>
                <div className="App">
                    <Header />
                    <div className="containerHR">
                        <Aside />
                        <TelaPrincipal />
                    </div>
                </div>
            </UserProvider>
        </Router>
        
    );
}

export default App;