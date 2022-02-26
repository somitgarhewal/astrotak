import React, { useState } from 'react'
import './myProfile.scss'

const MyProfile = () => {
    const [subTab, setSubTab] = useState('basicProfile')

    return (
        <div className="myProfileContainer">
            <div className="subTab">
                <div className={subTab === 'basicProfile' && 'activeSubTab'} onClick={() => setSubTab('basicProfile')}>Basic Profile</div>
                <div className={subTab === 'friendsAndFamily' && 'activeSubTab'} onClick={() => setSubTab('friendsAndFamily')}>Friends and Family Profile</div>
            </div>
        </div>
    )
}

export default MyProfile