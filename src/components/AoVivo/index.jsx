import { useState } from "react"
import { Chat } from "../Chat"
import { JoinChat } from "../JoinChat"


export const AoVivo = () => {
    const [socket, setSocket] = useState(null)
    const [chatVisibility, setChatVisibility] = useState(false)
    
    return (
        <div>
            {
                chatVisibility ? <Chat socket={socket} /> : <JoinChat setSocket={setSocket} setChatVisibility={setChatVisibility} />
            }
        </div>
        
    )
}