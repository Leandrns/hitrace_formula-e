import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"

export const Chat = () => {
    const messageRef = useRef()
    const [messageList, setMessageList] = useState([])

    const socket = io.connect('https://hitrace-formula-e.vercel.app/')

    useEffect(() => {
        socket.on('receive_message', data => {
            setMessageList((current) => [...current, data])
        })

        return () => socket.off('receive_message')
    }, [socket])

    const enviar = () => {
        const message = messageRef.current.value
        if (!message.trim()) return

        socket.emit('message', message)
        clearInput()
    }

    const clearInput = () => {
        messageRef.current.value = ''
    }

    return (
        <div className="chat">
            <h2>Chat</h2>
            {
                messageList.map((message, index) => (
                    <div className="message" key={index}>
                        <h3 className="autor">{message.author}</h3>
                        <p className="mensagem">{message.text}</p>
                    </div>

                ))
            }
            <input type="text" ref={messageRef} placeholder="Digite uma mensagem..." />
            <button onClick={enviar}>Enviar</button>
        </div>
    )
}