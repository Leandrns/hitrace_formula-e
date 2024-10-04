import { useState } from "react"
import { Chat } from "../Chat"
import { JoinChat } from "../JoinChat"
import './style.css'


export const AoVivo = () => {
    const [socket, setSocket] = useState(null)
    const [chatVisibility, setChatVisibility] = useState(false)
    
    return (
        <div className="ao-vivo">
            {
                chatVisibility ? <Chat socket={socket} /> : <JoinChat setSocket={setSocket} setChatVisibility={setChatVisibility} />
            }
        </div>
        
    )
}