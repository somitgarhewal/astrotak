import React, { useState } from 'react'
import ProfileWalletBar from './profileWalletBar'
import './myProfile.scss'
import ProfileTable from './profileTable'

const MyProfile = ({ relativeList }) => {
    const [subTab, setSubTab] = useState('basicProfile')
    const [displayProfiles, setDisplayProfiles] = useState(true)

    return (
        <div className="myProfileContainer">
            <div className="subTab">
                <div className={subTab === 'basicProfile' && 'activeSubTab'} onClick={() => setSubTab('basicProfile')}>Basic Profile</div>
                <div className={subTab === 'friendsAndFamily' && 'activeSubTab'} onClick={() => setSubTab('friendsAndFamily')}>Friends and Family Profile</div>
            </div>
            {
                subTab === 'friendsAndFamily' ?
                    <div className="">
                        <ProfileWalletBar />
                        <ProfileTable relativeList={relativeList} />
                        <div className="addNewProfile">
                            <button className='addNewProfileButton'>+ Add New Profile</button>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default MyProfile