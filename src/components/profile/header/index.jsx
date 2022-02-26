import React from 'react'
import { useNavigate } from 'react-router'
import Icon from '../../../assets/icon.png'

import './header.scss'

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className="">
            <div className='profileHeader'>
                <div className="backButton" onClick={() => navigate('/')}></div>
                <img className='logo' src={Icon} />
                <button className='logout'>Logout</button>
            </div>
        </div>
    )
}

export default Header