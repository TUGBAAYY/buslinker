import React from 'react'
import './booking.css'
import img1 from '../../../media/point.svg'
import img2 from '../../../media/swapp.svg'
import img3 from '../../../media/date.svg'
import img4 from '../../../media/tick.svg'

const Booking = () => {
  return (
    <div>
        <div>
            <div className="styleContainerStyles">
                <div className="style_Input">
                    <input type="text" placeholder='Hatay-Merkez' />
                    <div className="styleIcon">
                        <img src={img1} alt="" />
                    </div>
                </div>
                
                    <img className='styles_swapp' src={img2} alt="" />
               
                <div className="style_Input">
                    <input type="text" placeholder='İstanbul-Esenler' />
                    <div className="styleIcon">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="style_Input">
                    <input type="text" placeholder='23 Nisan Cuma 2023' />
                    <div className="styleIcon">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="stylesButtonContainer">
                    <div className="styleSelecetButton">
                        <img src={img4} alt="" />
                        <h3>Bugün</h3>
                    </div>
                    <div className="styleSelecetButton">
                        <img src={img4} alt="" />
                        <h3>Bugün</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booking