import React from 'react'
import './compaines.css'
import image from '../../media/linker.svg'
import img1 from '../../media/metro.png'
import img2 from '../../media/ulusoy.png'
import img3 from '../../media/nilufer.png'
import img4 from '../../media/pamukkale.png'
import img5 from '../../media/varan.png'
import img6 from '../../media/efetur.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

const Companies = () => {
  return (
    <div>
        <div className='partnerCompanies'>
            <img src={image} alt="" />
            <h1 className='titleText'>Partner Companies</h1>
        </div>
        <div className='stylePartnerCompanies '>
            <Carousel
            
            responsive={responsive}
            autoPlay={true}
            interval={2000}
            infinite={true}
            rewind={true}
            arrows={false}
            >
            <img className='img-fluid' src={img1} style={{width:"100px"}} alt="img1" />
            <img className='img-fluid'  src={img2} style={{width:"100px"}} alt="img2" />
            <img className='img-fluid'  src={img3} style={{width:"100px"}} alt="img3" />
            <img className='img-fluid'  src={img4} style={{width:"100px"}} alt="img4" />
            <img className='img-fluid'  src={img5} style={{width:"100px"}} alt="img5" />
            <img className='img-fluid'  src={img6} style={{width:"100px"}} alt="img6" />
            <img className='img-fluid'  src={img6} style={{width:"100px"}} alt="img6" />
           
            </Carousel>
        </div>
        
    </div>
  )
}

export default Companies