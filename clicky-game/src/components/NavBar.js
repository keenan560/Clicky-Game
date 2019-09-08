import React from 'react'


function Navbar() {
    return (
        <nav className='navbar bg-dark text-center text-white'>
            <a className='navbar-brand mx-auto'>Clicky Game</a>
            <a className='navbar-brand mx-auto'> Click an image to begin!</a>
            <a className='navbar-brand mx-auto'> Score: 0 | Top Score: 0</a>
        </nav>
    );
};

export default Navbar;