import React from 'react'
import './navbar.css'

import { useState } from 'react'
import logo from '../../media/logo.svg'
import bayrak from '../../media/flag.svg'


const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar ')

    }

    const removeNavbar = () => {
        setActive('navBar')
    }
    return (
        <div className='sectionbg'>
            <div className="containerr">
                <section className='navBarSection'>
                    <header className="header flex">
                        <div className="logoDiv ">
                            <a href="#" className="logo flex">
                                <img src={logo} alt="" />
                            </a>
                        </div>


                        <div className={active}>
                            <ul className="navLists flex text-white mt-3">
                                <div className='bayrakBorder'>

                                    <img src={bayrak} alt="" />
                                    <h1 className='mt-1'>USD</h1>
                                </div>
                                <li className='d-flex'>
                                    Help
                                    <span className="after-element"></span>
                                </li>
                                <li className='loginn'>Login</li>

                                <li className='register'>Register</li>
                            </ul>
                            <div onClick={removeNavbar} className="closeNavbar">
                            </div>
                        </div>
                        <div onClick={showNav} className="toggleNavbar">
                        </div>

                    </header>

                </section>
            </div>
        </div>
    )
}

export default Navbar