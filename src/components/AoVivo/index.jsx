import { useState } from "react"
import { Chat } from "../Chat"
import { JoinChat } from "../JoinChat"
import './style.css'
import corridaGif from '../../images/gif_transmissao.gif'

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
                        <div className="title"><h2>Transmissão Ao Vivo</h2><i class="fa-solid fa-circle"></i></div>
                        <img src={corridaGif} alt="" />
                    </div>
                    <Chat socket={socket} /> 
                </div>
                : <JoinChat setSocket={setSocket} setChatVisibility={setChatVisibility} />
            }
        </div>
        
    )
}