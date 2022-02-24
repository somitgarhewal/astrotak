import React from 'react'
import Home from '../../../assets/home.png'
import Talk from '../../../assets/talk.png'
import Ask from '../../../assets/ask.png'
import Reports from '../../../assets/reports.png'
import Chat from '../../../assets/chat.png'

import './footer.scss'

const Footer = () => {
    const options = [
        {
            image: Home,
            text: 'Home'
        },
        {
            image: Talk,
            text: 'Talk'
        },
        {
            image: Ask,
            text: 'Ask Question'
        },
        {
            image: Reports,
            text: 'Reports'
        },
        {
            image: Chat,
            text: 'Chat'
        },
    ]
    
    return (
        <div className='footer'>
            <div className="footerRow">
                {
                    options.map((item, index) =>
                        <div key={index} className="button">
                            <img src={item.image} />
                            <label>{item.text}</label>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Footer