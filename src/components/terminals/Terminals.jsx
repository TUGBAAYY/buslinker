import React from 'react'
import image from '../../media/linker.svg'
import './terminals.css'
import imgCity from '../../media/terminal.svg'
import { Link } from 'react-router-dom'
import img1 from '../../media/path.png'

const Data = [
  {
    id: 1,
    to: '/Esenler-Otogarı',
    name: 'Esenler-otogarı'
  },
  {
    id: 2,
    to: '/Ankara-Aşti',
    name: 'Ankara Aşti'
  },
  {
    id: 3,
    to: '/İzmir-Otogarı',
    name: 'Esenler-otogarı'
  },
  {
    id: 4,
    to: '/Antalya-Otogarı',
    name: 'Antalya Otogarı'
  },
  {
    id: 5,
    to: '/Hatay-Otogarı',
    name: 'Hatay Otogarı'
  },
  {
    id: 6,
    to: '/Adana-Otogarı',
    name: 'Adana Otogarı'
  },
  {
    id: 7,
    to: '/Muğla-Otogarı',
    name: 'Muğla Otogarı'
  },
  {
    id: 8,
    to: '/Trabzon-Otogarı',
    name: 'Trabzon Otogarı'
  },
  {
    id: 9,
    to: '/Gaziantep-Otogarı',
    name: 'Gaziantep Otogarı'
  },
  {
    id: 10,
    to: '/Nevşehir-Otogarı',
    name: 'Nevşehir Otogarı'
  },
  {
    id: 11,
    to: '/Mersin-Otogarı',
    name: 'Mersin Otogarı'
  },
  {
    id: 12,
    to: '/Fethiye-Otogarı',
    name: 'Fethiye Otogarı'
  },
  {
    id: 13,
    to: '/Bursa-Otogarı',
    name: 'Bursa Otogarı'
  },
  {
    id: 14,
    to: '/Konya-Otogarı',
    name: 'Konya Otogarı'
  },
  {
    id: 15,
    to: '/Çanakkale-Otogarı',
    name: 'Çanakkale Otogarı'
  },
  {
    id: 16,
    to: '/Çorum-Otogarı',
    name: 'Çorum Otogarı'
  },
]

const Terminals = () => {
  return (
    <div>
      <div className='partnerCompanies'>
        <img src={image} alt="" />
        <h1 className='titleText'>Popular Terminals</h1>
      </div>
      <div className="terminalcontaine">
        {Data.map(({ id, to, name }, index) => (

          <div className="terminalCity">
            <img src={imgCity} alt="" />
            <Link to={to}>
            <a href={to}>{name}</a>
            </Link>
          </div>
        ))}




      </div>
      <div className="divImage">
        <img src={img1} alt="" />
      </div>
    </div>
  )
}

export default Terminals