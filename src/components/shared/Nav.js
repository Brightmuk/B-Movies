import React from 'react'
import Search from './Search'
import './Nav.css';

const Nav= ()=>{

    return (
        <div class="navbar">
            <div class="nav-logo">B Movies</div>
            <Search/>
            <div></div>
        </div>
    )
}
export default Nav;