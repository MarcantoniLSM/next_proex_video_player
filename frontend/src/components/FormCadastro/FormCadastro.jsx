'use client'

import './FormCadastro.css'
import {useState} from 'react'

import axios from 'axios'

export default function FormCadastro(props){

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitPost = async (e) =>{
        e.preventDefault()

        try{
            const resp = await axios.post('http://localhost:8080/users',{
                "nameUser": login,
                "emailUser": email,
                "passwordUser": password
            }).then(props.handleScreen)
        }catch(err){
            console.error('Erro ao cadastrar usuário', err);
        }
    }

    const handleSubmitGet = async (e) =>{
        e.preventDefault()

        try{
            const resp = await axios.get(`http://localhost:8080/users?nameUser=${login}&passwordUser=${password}`)
            .then(props.handleScreen)
        }catch(err){
            console.error('Erro ao encontrar usuário', err);
        }
    }

    return(
        <div className='formCadastro'>
            <form onSubmit={handleSubmitPost}>
            <h2>Cadastro de Usuário</h2>
            <label>
                Login: <br/>
                <input type='text' value={login} onChange={e => setLogin(e.target.value)}></input>
            </label>
    
            <label>
                Email: <br/>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
            </label>
            
            <label>
                Senha: <br/>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
            </label>
            
            <button className='btn' type='submit'>Cadastrar</button>
            </form>

            <form onSubmit={handleSubmitGet}>
            <h2>Login</h2>
            <label>
                Login: <br/>
                <input type='text' value={login} onChange={e => setLogin(e.target.value)}></input>
            </label>
            
            <label>
                Senha: <br/>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
            </label>
            
            <button className='btn' type='submit'>Acessar</button>
            </form>
        </div>
        
    )
}