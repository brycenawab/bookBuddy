import React from 'react'
import {Link} from 'react-router-dom'
import '../app.css'

const Nav = () =>{
    return (
        <nav className='nav'>
            <Link to='/'>Home</Link> 
            <Link to='/books'>Books</Link>
        </nav>
    )
}

export default Nav