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
                    <img src={corridaImg} alt="" />
                    <Chat socket={socket} /> 
                </div>
                : <JoinChat setSocket={setSocket} setChatVisibility={setChatVisibility} />
            }
        </div>
        
    )
}