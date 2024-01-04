import React from 'react';
import image1 from '../../media/linker.svg';
import './destinations.css';
import img1 from '../../media/istanbul.png';
import img2 from '../../media/ankara.png';
import img3 from '../../media/izmir.png';
import img4 from '../../media/antalya.png';
import img5 from '../../media/hatay.png';
import img6 from '../../media/adana.png';
import img7 from '../../media/mugla.png';
import img8 from '../../media/trabzon.png';
import img9 from '../../media/gaziantep.png';
import img10 from '../../media/nevsehir.png';
import img11 from '../../media/mersin.png';

const Data = [
  { id: 1, image: img1, title: 'İstanbul' },
  { id: 2, image: img2, title: 'Ankara' },
  { id: 3, image: img3, title: 'İzmir' },
  { id: 4, image: img4, title: 'Antalya' },
  { id: 5, image: img5, title: 'Hatay' },
  { id: 6, image: img6, title: 'Adana' },
  { id: 7, image: img7, title: 'Muğla' },
  { id: 8, image: img8, title: 'Trabzon' },
  { id: 9, image: img9, title: 'Gaziantep' },
  { id: 10, image: img10, title: 'Nevşehir' },
  { id: 11, image: img11, title: 'Mersin' },
  { id: 12, image: img8, title: 'Trabzon' },
];

const Destinations = () => {
  return (
    <div>
      <div className="styleContainer ">
        <div className="stylesHeader">
          <img src={image1} alt="" />
          <h1 className="titleText">Popular Destinations</h1>
        </div>
        <div className="stylesGrid">
          <div className="stylesDestination">
            {Data.map(({ id, image, title }, index) => (
              <div className="destinationCard" key={id}>
                <div className="imageContainer">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
