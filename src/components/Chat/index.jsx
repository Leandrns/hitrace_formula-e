import { useEffect, useRef, useState } from "react"
import './style.css'

export const Chat = ({ socket }) => {
    const bottomRef = useRef()
    const messageRef = useRef()
    const [messageList, setMessageList] = useState([])

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
        focusInput()
    }

    const clearInput = () => {
        messageRef.current.value = ''
    }

    const focusInput = () => {
        messageRef.current.focus()
    }

    const getEnterKey = (e) => {
        if(e.key === 'Enter')
          enviar()
    }

    return (
        <div className="chat">
            <h2>Chat</h2>
            <div className="mensagens">
            {
                messageList.map((message, index) => (
                    <div className={message.authorId === socket.id ? 'mensagem mine' : 'mensagem'} key={index}>
                        <h3 className="autor">{message.author}</h3>
                        <span className="texto">{message.text}</span>
                    </div>

                ))
            }
            </div>
                <div className="actions">
                    <input type="text" ref={messageRef} placeholder="Digite uma mensagem..." onKeyDown={(e)=>getEnterKey(e)} />
                    <button onClick={enviar}><i class="fa-solid fa-circle-arrow-right"></i></button>
                </div>
            
        </div>
    )
}