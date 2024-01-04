import React from 'react'
import './booking.css'
import image1 from '../../media/point.svg'
import image2 from '../../media/icon.svg'
import image3 from '../../media/date.svg'
import image4 from '../../media/redtick.svg'
import image5 from '../../media/magnify.svg'
import { Link } from 'react-router-dom'

const Booking = () => {
    return (
        <div>
            <div className="bookingBg">
                <div className='bookingSection'>
                    <div className="bookingInput">
                        <div className='topSection'>
                            <div className="textBox">
                                <img src={image1} alt="" />
                                <input type="text" placeholder='Hatay-Merkez' />
                            </div>
                            <img className='img2' src={image2} alt="" />
                            <div className="textBox">
                                <img src={image1} alt="" />
                                <input type="text" placeholder='İstanbul-Otogar' />
                            </div>
                        </div>
                        <div className='bottomSection '>
                            <div className="textBoxContainer">
                                <img src={image3} alt="" />
                                <input type="text" placeholder='Hatay - Merkez' className='inputBottom' name='date' />
                            </div>
                            <div className="lastTextBoxContainer">
                                <div className="optionStyle">
                                    <img src={image4} alt="" />
                                    <span>Bugün</span>
                                </div>
                                <div className="optionStyle">
                                    <img src={image4} alt="" />
                                    <span>Yarın</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bookingBtn'>
                    <Link to={"/bilet"}>
                        <img src={image5} alt="" />
                        <button>Bilet Bul</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Booking