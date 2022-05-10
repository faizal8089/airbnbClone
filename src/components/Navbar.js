import React from 'react';
import '../css/Navbar.css';
// import logo from '../images/airbnb.png';

const logo= 'https://firebasestorage.googleapis.com/v0/b/airbnb-eeef1.appspot.com/o/images%2Fairbnb.png?alt=media&token=8617b0d9-ac32-45d4-93e5-fcce9b20b2fd';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <a href="...">
                <img id='logo' src={logo} alt="" />
            </a>
        </nav>
    );
}