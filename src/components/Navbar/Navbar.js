import React from 'react';
import Navbar from '../Navbar/Navbar.css';

function navbar() {
    return(
        <div className='navContainer'>
            <div className='navbar'>
                <div className='navHeading'>
                    <h1>Intern Resume`</h1>
                </div>

                <div className='navContents'>
                    <li><a href='#biodata'>Biodata</a></li>
                    <li><a href='#education'>Education</a></li>
                    <li><a href='#experience'>Experience</a></li>
                </div>
            </div>
        </div>
    )
};
export default navbar;