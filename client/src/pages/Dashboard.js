import React,{useEffect} from 'react'
import { Navigate , useNavigate, Link } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div className='homepage'>
        <h1>Hii User!</h1>
        <h1>Hope you have great day!</h1>
      <Link to='/'>
      <h2>Go to login page</h2>
      </Link>

    </div>
  )
}

export default Dashboard