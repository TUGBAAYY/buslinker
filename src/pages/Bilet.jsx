import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Booking from '../components/ticket/booking/Booking'
import Accordion from '../components/ticket/acordion/Acordion'

const Bilet = () => {
  return (
    
    <div>
      <Navbar />
      <Booking />
      <Accordion /> 
      <Footer />
    </div>
  )
}

export default Bilet