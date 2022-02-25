import React from 'react'
import Icon from '../../../assets/icon.png'

import './header.scss'

const Header = () => {
    return (
        <div className="">
            <div className='profileHeader'>
                {/* <img className='hamburger' src={Hamburger} /> */}
                <div className="backButton"></div>
                <img className='logo' src={Icon} />
                <button className='logout'>Logout</button>
            </div>
        </div>
    )
}

export default Header