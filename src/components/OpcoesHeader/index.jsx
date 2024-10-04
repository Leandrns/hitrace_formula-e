import { useEffect } from 'react'
import './style.css'

const textoOpcoes = ['Início', 'Notícias', 'HitRace Formula E']

export const OpcoesHeader = () => {
    useEffect(() => {
        const toggleBtn = document.querySelector('.toggle-btn');
        const toggleBtnIcon = document.querySelector('.toggle-btn i');
        const menuDropDown = document.querySelector('.dropdown');

        toggleBtn.addEventListener('click', () => {
           menuDropDown.classList.toggle('open')

            const isOpen = menuDropDown.classList.contains('open')
            toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' 
        }) 
    }, [])
    return (
        <div>
            <ul id='opcoes'>
                {textoOpcoes.map(texto => (
                    <li><p>{texto}</p></li>
                ))}
            </ul>
            <div className='toggle-btn'>
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className='dropdown'>
                <ul className='opcoes-dropdown'>
                    {textoOpcoes.map(texto => (
                        <li><p>{texto}</p></li>
                    ))}
                </ul>
            </div>
        </div>

    )
}