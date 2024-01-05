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
                            <a href="#" className="logoFlex">
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
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm127.978 274.82-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 0 0-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 0 0 0 .07l.01.022a.268.268 0 0 0 .049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 0 0 0 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 0 0 0-.07l-.01-.022a.268.268 0 0 0-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 0 0 0-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02c-.04-.04-.06-.05-.083-.058a.118.118 0 0 0-.07 0Z"></path></svg>
                            </div>
                        </div>
                        <div onClick={showNav} className="toggleNavbar">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>
                        </div>

                    </header>

                </section>
            </div>
        </div>
    )
}

export default Navbar