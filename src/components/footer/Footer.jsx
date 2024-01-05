import React from 'react'
import img1 from '../../media/redlogo.svg'
import img2 from '../../media/appstore.svg'
import img3 from '../../media/playstore.svg'
import img4 from '../../media/subscribe.svg'
import img5 from '../../media/Facebook.svg'
import img6 from '../../media/Twitter.svg'
import img7 from '../../media/Telegram.svg'
import img8 from '../../media/mastercard.svg'
import img9 from '../../media/visa.svg'
import img10 from '../../media/amex.svg'
import img11 from '../../media/paypal.svg'
import img12 from '../../media/discover.svg'
import img13 from '../../media/stripe.svg'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <div className="styleFooter">
            <div className="styleContent">
                <div className="styleLeft">
                    <div className="styleLogo">
                        <img src={img1} alt="" />
                    </div>
                    <div className="styleStore">
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                    <div className="styleDiv"></div>
                    <div className="styleAddress">
                        <div className="upText">
                            <p>
                                Buslinker Inc
                                <br />
                                Travel Warrant
                                <br />
                                No: 7487
                            </p>
                        </div>
                        <div className="bottomText">
                            <p>All rights reserved
                                <br />
                                © 2023
                            </p>
                        </div>
                    </div>
                </div>
                <div className="styleİtems">
                    <div className="styleList">
                        <h3 className='logoMargin'>Bus Companies</h3>
                        <a className='logoMargin' href="/metro-turizm">Metro Turizm</a>
                        <a className='logoMargin' href="/kamil-koç">Kamil Koç</a>
                        <a className='logoMargin' href="/ulusoy">Ulusoy</a>
                        <a className='logoMargin' href="/nilüfer-turizm">Nilüfer</a>
                    </div>
                    <div className="styleList">
                    <h3 className='logoMargin'>Popular Travels</h3>
                        <a className='logoMargin' href="/istanbul-ankara">İstanbul-Ankara</a>
                        <a className='logoMargin' href="/istanbul-izmir">İstanbul-İzmir</a>
                        <a className='logoMargin' href="/istanbul-antalya">İstanbul-Antalya</a>
                        <a className='logoMargin' href="/istanbul-bursa">İstanbul-Bursa</a>
                    </div>
                    <div className="styleList">
                    <h3 className='logoMargin'>All Terminals</h3>
                        <a className='logoMargin' href="/istanbul">İstanbul</a>
                        <a className='logoMargin' href="/ankara">Ankara</a>
                        <a className='logoMargin' href="/izmir">İzmir</a>
                        <a className='logoMargin' href="/antalya">Antalya</a>
                    </div>
                    <div className="styleList">
                    <h3 className='logoMargin'>Flight Tickets</h3>
                        <a className='logoMargin' href="/turkish-airlines">Turkish Airlines</a>
                        <a className='logoMargin' href="/pegasus">Pegasus</a>
                        <a className='logoMargin' href="/anadolu-jet">Anadolu Jet</a>
                        <a className='logoMargin' href="/onur-air">Onur Air</a>
                    </div>
                    <div className="styleList">
                    <h3 className='logoMargin'>About Us</h3>
                        <a className='logoMargin' href="/blog">Blog</a>
                        <a className='logoMargin' href="/basında-biz">Basında Biz</a>
                        <a className='logoMargin' href="/kvkk">KVKK</a>
                        <a className='logoMargin' href="/reklam">Reklam</a>
                    </div>
                    <div className="styleList">
                    <h3 className='logoMargin'>Bus Ticket</h3>
                        <a className='logoMargin' href="/travels">Travels</a>
                        <a className='logoMargin' href="/bus-companies">Bus Companies</a>
                        <a className='logoMargin' href="/check-ticket">Check Ticket</a>
                        <a className='logoMargin' href="/popular-travels">Popular Travels</a>
                    </div>
                </div>
                <div className="styleRight">
                    <div className="styleSubscribe">
                        <h1>Subscribe to our newsletter</h1>
                        <p>Sign up and we'll send the best deals
                           <br />
                            to you
                            </p>
                    <div className='styleInput'>
                        <input type="text" placeholder='Enter your email address' />
                        <div className="submit">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    </div>
                    <div className="styleSocials">
                        <h1>Follow us on social media</h1>
                        <div className="stylesIcon">
                            <div className="icon">
                                <img src={img5} alt="" />
                            </div>
                            <div className="icon">
                                <img src={img6} alt="" />
                            </div>
                            <div className="icon">
                                <img src={img7} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stylePayment">
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13} alt="" />
            </div>
            <div className="style_bottom">
                <h3>© 2021 - 2022</h3>
                <h3>All rights reserved</h3>
                <h3>Privacy Policy</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer