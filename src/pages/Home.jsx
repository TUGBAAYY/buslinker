import React from 'react'
import { Link } from 'react-router-dom'
import Option from '../components/option/Option'

const Home = () => {
  return (
    <div>
      <Option />
        <Link to={"/bilet"}>
        <button>bilet bul</button>
        </Link>
    </div>
  )
}

export default Home