import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/home'>Home</NavLink>
                {/* reference er karone ekta NavLink e dynamic style dewar karone sob gulote apply hoyeche */}
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/test'>Test</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
            <p>This part is fixed</p>
        </div>
    );
};

export default Header;