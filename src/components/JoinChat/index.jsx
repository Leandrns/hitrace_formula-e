import {useRef} from 'react'
import io from 'socket.io-client'
import './style.css'

export const JoinChat = ({ setChatVisibility, setSocket }) => {

  const usernameRef = useRef()

  const handleSubmit = async () => {
    const username = usernameRef.current.value
    if(!username.trim()) return
    const socket = await io.connect('https://server-hitrace.onrender.com')
    socket.emit('set_username', username)
    setSocket(socket)
    setChatVisibility(true)
  }

  return (
    <div className='join-container'>
      <h2>Entre no Chat ao vivo do HitRace!</h2>
      <input ref={usernameRef} placeholder='Nome de usuário' />
      <button onClick={()=>handleSubmit()} >Entrar</button>
    </div>
  )
}