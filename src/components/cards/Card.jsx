import React from 'react'
import './card.css'
import img1 from '../../media/cancel-anytime.svg'
import img2 from '../../media/easy-refund.svg'
import img3 from '../../media/comfortable-travel.svg'
import img4 from '../../media/secure-payment.svg'
import img5 from '../../media/giftcards.svg'
import img6 from '../../media/no-fees.svg'
import img8 from '../../media/best-price-guarantee.svg'

const Data = [
    {
        id:1,
        img: img1,
        title:'Cancel Anytime',
        text: 'cancel your reservation whenever you need, no question !'
    },
    {
        id:2,
        img: img2,
        title:'Easy Refund',
        text: 'If you cancel within 24 hours of booking, we will give you a full refund'
    },
    {
        id:3,
        img: img3,
        title:'Comfortable Travel',
        text: 'Travel with our trusted bus companies and enjoy your trip'
    },
    {
        id:4,
        img: img4,
        title:'Secure Payment',
        text: 'Secure payment with your credit card or debit card'
    },
    {
        id:5,
        img: img5,
        title:'Gift Cards',
        text: 'Gift cards are available for your loved ones'
    },
    {
        id:6,
        img: img6,
        title:'No Fees',
        text: 'No booking fees, no hidden charges and no payment processing fees'
    },
    {
        id:7,
        img: img3,
        title:'Comfortable Travel',
        text: 'Travel with our trusted bus companies and enjoy your trip'
    },
    {
        id:8,
        img: img8,
        title:'Best Price Guarantee',
        text: 'Find the best prices from our trusted bus companies'
    },
]
const Card = () => {
  return (
    <div>
        <div className="style_Container">
                {Data.map(({id,img,title,text},index)=>(
            <div className="styleReason">

                    <div className="styleImg">
                        <img src={img} alt="" />
                    </div>
                    <div className="styleDescription">
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
            </div>
                    ))}
        </div>
    </div>
  )
}

export default Card