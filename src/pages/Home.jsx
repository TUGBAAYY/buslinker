import React from 'react'
import Option from '../components/option/Option'
import Booking from '../components/booking/Booking'
import Companies from '../components/companies/Companies'
import Destinations from '../components/destinations/Destinations'
import Buslinker from '../components/buslinker/Buslinker'
import Terminals from '../components/terminals/Terminals'
import Navbar from '../components/navbar/Navbar'
import Card from '../components/cards/Card'
import Footer from '../components/footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Option />
      <Booking /> 
      <Companies />
      <Destinations />
      <Buslinker />
      <Terminals />
      <Card /> 
      <Footer />
    </div>
  )
}

export default Home