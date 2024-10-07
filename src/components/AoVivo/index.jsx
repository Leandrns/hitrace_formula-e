import { useState } from "react"
import { Chat } from "../Chat"
import { JoinChat } from "../JoinChat"
import './style.css'
import corridaImg from '../../images/corrida.png'

export const AoVivo = () => {
    const [socket, setSocket] = useState(null)
    const [chatVisibility, setChatVisibility] = useState(false)
    
    return (
        <div className="ao-vivo">
            {
                chatVisibility 
                ?
                <div className="video-chat">
                    <div className="transmissao">
                        <div className="title"><h2>Transmissão Ao Vivo</h2><i class="fa-solid fa-microphone-lines"></i></div>
                        <img src={corridaImg} alt="" />
                    </div>
                    <Chat socket={socket} /> 
                </div>
                : <JoinChat setSocket={setSocket} setChatVisibility={setChatVisibility} />
            }
        </div>
        
    )
}