import React from 'react'
import Hamburger from '../../../assets/hamburger.png'
import Icon from '../../../assets/icon.png'
import Profile from '../../../assets/profile.png'

import './header.scss'

const Header = () => {
    return (
        <div className="">
            <div className='header'>
                <img className='hamburger' src={Hamburger} />
                <img className='logo' src={Icon} />
                <img className='profile' src={Profile} />
            </div>
        </div>
    )
}

export default Header