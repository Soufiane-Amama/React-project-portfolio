import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='dad'>
        <div className='box' >
            <h3 className='item'>
                <Link to="/" >Home</Link>
            </h3>
            <h3 className='item'>
                <Link to="/amthal" >Amthal</Link>
            </h3>
            <h3 className='item'>
                <Link to="/gallery">Gallery</Link>
            </h3>
        </div>
    </div>
  )
}

export default Header