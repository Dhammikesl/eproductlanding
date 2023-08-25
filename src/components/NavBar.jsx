import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.svg';
import { useState } from 'react';
import { Button } from 'react-bootstrap';


const Menu = () => (
    <>
        <p>
            <a href="#features">Features</a>
        </p>
        <p>
            <a href="#benefits">Benefits</a>
        </p>
        <p>
            <a href="#get-in-touch">Contact Us</a>
        </p>
    </>
)

const Navbar = () => {
    const [toggleMenu, SetToggleMenu] = useState(false);
    return (
        <div className='navbar-main'>
            <div className='navbar-links'>
                <div className='navbar-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='navbar-content'>
                    <Menu />
                </div>
            </div>
            <div className='navbar-sign'>

                <Button variant="white">Request a demo</Button>{' '}
            </div>

            <div className='navbar-menu'>
                {
                    toggleMenu
                        ? <RiCloseLine color='#fff' size={27} onClick={() => SetToggleMenu(false)} />
                        : <RiMenu3Line color='#fff' size={27} onClick={() => SetToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className='navbar-menu-content'>
                            <div className='navbar-menu-links'>
                                <Menu />
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}


export default Navbar
