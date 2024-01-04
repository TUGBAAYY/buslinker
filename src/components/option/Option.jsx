import React, { useState } from 'react';
import './option.css';
import busred from '../../media/bus.svg';
import plane from '../../media/plane1.svg';
import hotel from '../../media/hotel.svg';
import ferry from '../../media/ferry.svg';

const Option = () => {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="container">
      <div className='d-flex optionCont mt-5'> 
      <div className={`option busred d-flex ${activeOption === 'busred' ? 'active' : ''}`}  onClick={() => handleOptionClick('busred')}>
        <img src={busred} alt="" />
        <p className={activeOption === 'busred' ? 'active-text' : ''}>Otobüs</p>
      </div>
      <div className={`option plane d-flex ${activeOption === 'plane' ? 'active' : ''}`} onClick={() => handleOptionClick('plane')}>
        <img src={plane} alt="" />
        <p className={activeOption === 'plane' ? 'active-text' : ''}>Uçak</p>
      </div>
      <div className={`option hotel d-flex ${activeOption === 'hotel' ? 'active' : ''}`} onClick={() => handleOptionClick('hotel')}>
        <img src={hotel} alt="" />
        <p className={activeOption === 'hotel' ? 'active-text' : ''}>Otel</p>
      </div>
      <div className={`option ferry d-flex ${activeOption === 'ferry' ? 'active' : ''}`} onClick={() => handleOptionClick('ferry')}>
        <img src={ferry} alt="" />
        <p className={activeOption === 'ferry' ? 'active-text' : ''}>Feribot</p>
      </div>
      </div>
      
    </div>
  );
};

export default Option;
