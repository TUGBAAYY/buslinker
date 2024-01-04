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
                        <h3>Bus Companies</h3>
                        <a href="/metro-turizm">Metro Turizm</a>
                        <a href="/kamil-koç">Kamil Koç</a>
                        <a href="/ulusoy">Ulusoy</a>
                        <a href="/nilüfer-turizm">Nilüfer</a>
                    </div>
                    <div className="styleList">
                    <h3>Popular Travels</h3>
                        <a href="/istanbul-ankara">İstanbul-Ankara</a>
                        <a href="/istanbul-izmir">İstanbul-İzmir</a>
                        <a href="/istanbul-antalya">İstanbul-Antalya</a>
                        <a href="/istanbul-bursa">İstanbul-Bursa</a>
                    </div>
                    <div className="styleList">
                    <h3>All Terminals</h3>
                        <a href="/istanbul">İstanbul</a>
                        <a href="/ankara">Ankara</a>
                        <a href="/izmir">İzmir</a>
                        <a href="/antalya">Antalya</a>
                    </div>
                    <div className="styleList">
                    <h3>Flight Tickets</h3>
                        <a href="/turkish-airlines">Turkish Airlines</a>
                        <a href="/pegasus">Pegasus</a>
                        <a href="/anadolu-jet">Anadolu Jet</a>
                        <a href="/onur-air">Onur Air</a>
                    </div>
                    <div className="styleList">
                    <h3>About Us</h3>
                        <a href="/blog">Blog</a>
                        <a href="/basında-biz">Basında Biz</a>
                        <a href="/kvkk">KVKK</a>
                        <a href="/reklam">Reklam</a>
                    </div>
                    <div className="styleList">
                    <h3>Bus Ticket</h3>
                        <a href="/travels">Travels</a>
                        <a href="/bus-companies">Bus Companies</a>
                        <a href="/check-ticket">Check Ticket</a>
                        <a href="/popular-travels">Popular Travels</a>
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