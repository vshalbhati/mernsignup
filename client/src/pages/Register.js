import {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Main.css'
import axios from 'axios';



function App() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event){
    event.preventDefault()
    const response = await fetch("http://localhost:1337/register",{
      method: 'post',
    headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
    const data =await response.json()
    if(data.status === 'ok'){
      Navigate('/login')
    }
    window.location.href='/'

  }
  return (
    <div className="register">
      <h1> Register </h1>
      <form onSubmit={registerUser}>
        <div className="username">
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
        </div>
        <div className="username">
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
        </div>
        <div className="password">
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password"/>
        </div>
        <div className="btn">
        <button type="submit" value="Register">Register</button>
        </div>
      </form>
    </div>
  );
}

export default App;
