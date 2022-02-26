import React from 'react'
import Hamburger from '../../../assets/hamburger.png'
import Icon from '../../../assets/icon.png'
import Profile from '../../../assets/profile.png'
import { useNavigate } from 'react-router';

import './header.scss'

const Header = () => {

    const navigate = useNavigate()
    
    return (
        <div className="">
            <div className='header'>
                <img className='hamburger' src={Hamburger} />
                <img className='logo' src={Icon} />
                <img className='profile' src={Profile} onClick={() => navigate('/profile')}/>
            </div>
        </div>
    )
}

export default Header