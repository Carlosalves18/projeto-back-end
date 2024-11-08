import React from 'react'
import axios from "axios"

const Register = () => {

    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setUPassword] = React.useState('')
    const [message, setMessage] = React.useState('')

    const handleRegister = async  (event) => {
        event.preventDefault();
        try{
            axios.post("http://localhost:7777/register", {
                username,
                email,
                password
            })
            setMessage("O usuaário foi cadastrado com sucesso!")
        }catch(error) { 
            setMessage("Não foi possível cadastrar o usuário")
        }
    }

  return (
    <>
    <h1>Página de Cadastro</h1>
    <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <input
        type="text"
        value={username} 
        onChange={(event) => setUsername(event.target.value)}/>  
        <label>Email:</label>
        <input
        type="email"
        value={email} onChange={(event) => setEmail(event.target.value)}/>
        <label>Senha:</label>
        <input 
        type="password"
        value={password} onChange={(event) => setUPassword(event.target.value)}/>
        <button type='submit'>Cadastra</button>
    </form>
    {message && <p>{message}</p>}
    </>
  )
}

export default Register