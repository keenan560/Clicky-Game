import React from 'react'


function Navbar() {
    return (
        <nav className='navbar bg-dark text-center text-white'>
            <div className='navbar-brand mx-auto'>Clicky Game</div>
            <div className='navbar-brand mx-auto'> Click an image to begin!</div>
            <div className='navbar-brand mx-auto'> Score: 0 | Top Score: 0</div>
        </nav>
    );
};

export default Navbar;