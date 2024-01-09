// Accordion.js

import React, { useState } from 'react';
import './acord.css';
import img1 from '../../../media/extend-down.svg';
import img2 from '../../../media/departure-hour.svg';
import img3 from '../../../media/seat-layout.svg';
import img4 from '../../../media/from.svg';
import img5 from '../../../media/ticket-price.svg';
import img6 from '../../../media/extra-services.svg';
import img7 from '../../../media/iconnsol.svg';
import img8 from '../../../media/iconsağ.svg';
import img9 from '../../../media/icon1.svg';
import img10 from '../../../media/icon2.svg';
import img11 from '../../../media/metro1.png';
import img12 from '../../../media/icon3.svg';
import img13 from '../../../media/icon4.svg';
import img14 from '../../../media/icon5.svg';
import img15 from '../../../media/icon6.svg';
import img16 from '../../../media/icon7.svg';
import img17 from '../../../media/icon8.svg';


const Accordion = () => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);

    const handleToggle = () => {
        setIsActive1(!isActive1);
    }

    const handleToggle2 = () => {
        setIsActive2(!isActive2);
    }
    const handleToggle3 = () => {
        setIsActive3(!isActive3);
    }
    const handleToggle4 = () => {
        setIsActive4(!isActive4);
    }
    const handleToggle5 = () => {
        setIsActive5(!isActive5);
    }
    const handleToggle6 = () => {
        setIsActive6(!isActive6);
    }

    return (
        <div>
            <div className="divContainerContent">
                <div className="acordion_cont">

                    <div className={`accordion ${isActive1 ? 'actives' : 'closed'}`}>
                        <div className="title" onClick={handleToggle}>
                            <div className="styleLeft">
                                <img src={img2} alt="" />
                                <div><h1>Kalkış Saati</h1></div>
                            </div>
                            <div className="styleRightt">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        {isActive1 && <div className='content'>Accordion content</div>}
                    </div>
                    <div className={`accordion ${isActive2 ? 'actives' : 'closed'}`}>
                        <div className="title" onClick={handleToggle2}>
                            <div className="styleLeft">
                                <img src={img3} alt="" />
                                <div><h1>Koltuk Düzeni</h1></div>
                            </div>
                            <div className="styleRightt">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        {isActive2 && <div className='content'>Accordion content</div>}
                    </div>
                    <div className={`accordion ${isActive3 ? 'actives' : 'closed'}`}>
                        <div className="title" onClick={handleToggle3}>
                            <div className="styleLeft">
                                <img src={img4} alt="" />
                                <div><h1>Nereden</h1></div>
                            </div>
                            <div className="styleRightt">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        {isActive3 && <div className='content'>Accordion content</div>}
                    </div>
                    <div className={`accordion ${isActive4 ? 'actives' : 'closed'}`}>
                        <div className="title" onClick={handleToggle4}>
                            <div className="styleLeft">
                                <img src={img4} alt="" />
                                <div><h1>Nereye</h1></div>
                            </div>
                            <div className="styleRightt">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        {isActive4 && <div className='content'>Accordion content</div>}
                    </div>
                    <div className={`accordion ${isActive5 ? 'actives' : 'closed'}`}>
                        <div className="title" onClick={handleToggle5}>
                            <div className="styleLeft">
                                <img src={img5} alt="" />
                                <div><h1>Bilet Fiyatı</h1></div>
                            </div>
                            <div className="styleRightt">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        {isActive5 && <div className='content'>Accordion content</div>}
                    </div>
                    <div className={`accordion ${isActive6 ? 'actives' : 'closed'}`}>
                        <div className="title" onClick={handleToggle6}>
                            <div className="styleLeft">
                                <img src={img6} alt="" />
                                <div><h1>Hizmetler</h1></div>
                            </div>
                            <div className="styleRightt">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        {isActive6 && <div className='content'>Accordion content</div>}
                    </div>
                </div>

                <div className="styless_Containerr">
                    <div className="styleContanier_">
                        <div className="stylesHeadingg">
                            <div className="stylesoncekigun">
                                <div className="stylesoncekigun_icon">
                                    <img src={img7} alt="" />
                                </div>
                                <div className="stylesoncekigun_text">
                                    Önceki Gün
                                </div>
                            </div>
                            <div className="totalTravels">
                                <h1>
                                    Toplam 
                                    <span> &nbsp; 3 &nbsp;</span>
                                    sefer bulundu
                                </h1>
                            </div>
                            <div className="nextDay">
                                <div className="styleTextt">Sonraki Gün</div>
                                <div className="stylesIconn">
                                    <img src={img8} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stylesSort">
                        <div className="stylesLeftt">
                            <div className="sortIcon">
                                <img src={img9} alt="" />
                            </div>
                            <div className="filterIcon">
                                <img src={img10} alt="" />
                            </div>
                        </div>
                        <div className="stylesRightt">
                            <div className="stylesRightt_sol">
                                <div className="switchContainer">
                                    <div className="stylesButtonn">

                                    </div>

                                </div>
                                <div className="stylesLabel">&nbsp; En Düşük &nbsp;</div>
                            </div>
                            <div className="stylesRightt_sol">
                                <div className="switchContainer">
                                    <div className="stylesButtonn">

                                    </div>

                                </div>
                                <div className="stylesLabel">&nbsp; Sadece Premium</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="stylesTravelsContent">
                        <div className="styles_Logo">
                            <img src={img11} alt="" />
                        </div>
                        <div className="stylesMid">
                            <div className="fromSections">
                                <div className="hour">
                                    11:30 PM
                                </div>
                                <div className="location">
                                    İstanbul,Esenler
                                </div>
                                
                            </div>
                            <div className="arrivalSection">
                            <div className="styles_hour">
                            9h 10m
                            </div>
                            <div className="stylesLine"></div>
                        </div>
                        <div className="toSection">
                            <div className="hour">8:30 PM</div>
                            <div className="stylesLocation">Hatay, Merkez</div>
                        </div>
                        </div>
                       
                        
                    <div className="stylesLeft__Bottomm">

                        <div className="styles_Optionn">
                            <div className="stylesIconn_">
                                <img src={img12} alt="" />
                            </div>
                            <div className="stylesTextt">Hijyenik Yolculuk</div>
                        </div>
                        <div className="styles_Optionn">
                        <div className="stylesIconn_">
                                <img src={img13} alt="" />
                            </div>
                            <div className="stylesTextt">Hijyenik Yolculuk</div>
                        </div>
                    </div>
                        <div className="styles__Rightt">
                            <div className="styles__price">
                                <h1>₺876</h1>
                               
                            </div>
                            <button className='button_Sec'>
                                    <h1>Seç</h1>
                                </button>
                        </div>
                        <div className="mid__Bottom">
                            <div className="styless__Servicess">
                                <img src={img14} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img15} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img16} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img17} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="stylesTravelsContent">
                        <div className="styles_Logo">
                            <img src={img11} alt="" />
                        </div>
                        <div className="stylesMid">
                            <div className="fromSections">
                                <div className="hour">
                                    11:30 PM
                                </div>
                                <div className="location">
                                    İstanbul,Esenler
                                </div>
                                
                            </div>
                            <div className="arrivalSection">
                            <div className="styles_hour">
                            9h 10m
                            </div>
                            <div className="stylesLine"></div>
                        </div>
                        <div className="toSection">
                            <div className="hour">8:30 PM</div>
                            <div className="stylesLocation">Hatay, Merkez</div>
                        </div>
                        </div>
                       
                        
                    <div className="stylesLeft__Bottomm">

                        <div className="styles_Optionn">
                            <div className="stylesIconn_">
                                <img src={img12} alt="" />
                            </div>
                            <div className="stylesTextt">Hijyenik Yolculuk</div>
                        </div>
                        <div className="styles_Optionn">
                        <div className="stylesIconn_">
                                <img src={img13} alt="" />
                            </div>
                            <div className="stylesTextt">Hijyenik Yolculuk</div>
                        </div>
                    </div>
                        <div className="styles__Rightt">
                            <div className="styles__price">
                                <h1>₺876</h1>
                               
                            </div>
                            <button className='button_Sec'>
                                    <h1>Seç</h1>
                                </button>
                        </div>
                        <div className="mid__Bottom">
                            <div className="styless__Servicess">
                                <img src={img14} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img15} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img16} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img17} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="stylesTravelsContent">
                        <div className="styles_Logo">
                            <img src={img11} alt="" />
                        </div>
                        <div className="stylesMid">
                            <div className="fromSections">
                                <div className="hour">
                                    11:30 PM
                                </div>
                                <div className="location">
                                    İstanbul,Esenler
                                </div>
                                
                            </div>
                            <div className="arrivalSection">
                            <div className="styles_hour">
                            9h 10m
                            </div>
                            <div className="stylesLine"></div>
                        </div>
                        <div className="toSection">
                            <div className="hour">8:30 PM</div>
                            <div className="stylesLocation">Hatay, Merkez</div>
                        </div>
                        </div>
                       
                        
                    <div className="stylesLeft__Bottomm">

                        <div className="styles_Optionn">
                            <div className="stylesIconn_">
                                <img src={img12} alt="" />
                            </div>
                            <div className="stylesTextt">Hijyenik Yolculuk</div>
                        </div>
                        <div className="styles_Optionn">
                        <div className="stylesIconn_">
                                <img src={img13} alt="" />
                            </div>
                            <div className="stylesTextt">Hijyenik Yolculuk</div>
                        </div>
                    </div>
                        <div className="styles__Rightt">
                            <div className="styles__price">
                                <h1>₺876</h1>
                               
                            </div>
                            <button className='button_Sec'>
                                    <h1>Seç</h1>
                                </button>
                        </div>
                        <div className="mid__Bottom">
                            <div className="styless__Servicess">
                                <img src={img14} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img15} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img16} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img17} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="stylesTravelsContent">
                        <div className="styles_Logo">
                            <img src={img11} alt="" />
                        </div>
                        <div className="stylesMid">
                            <div className="fromSections">
                                <div className="hour">
                                    11:30 PM
                                </div>
                                <div className="location">
                                    İstanbul,Esenler
                                </div>
                                
                            </div>
                            <div className="arrivalSection">
                            <div className="styles_hour">
                            9h 10m
                            </div>
                            <div className="stylesLine"></div>
                        </div>
                        <div className="toSection">
                            <div className="hour">8:30 PM</div>
                            <div className="stylesLocation">Hatay, Merkez</div>
                        </div>
                        </div>
                       
                        
                    <div className="stylesLeft__Bottomm">

                        <div className="styles_Optionn">
                            <div className="stylesIconn_">
                                <img src={img12} alt="" />
                            </div>
                            <div className="stylesTextt">Hijyenik Yolculuk</div>
                        </div>
                        <div className="styles_Optionn">
                        <div className="stylesIconn_">
                                <img src={img13} alt="" />
                            </div>
                            <div className="stylesTextt">Hijyenik Yolculuk</div>
                        </div>
                    </div>
                        <div className="styles__Rightt">
                            <div className="styles__price">
                                <h1>₺876</h1>
                               
                            </div>
                            <button className='button_Sec'>
                                    <h1>Seç</h1>
                                </button>
                        </div>
                        <div className="mid__Bottom">
                            <div className="styless__Servicess">
                                <img src={img14} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img15} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img16} alt="" />
                            </div>
                            <div className="styless__Servicess">
                                <img src={img17} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion;
