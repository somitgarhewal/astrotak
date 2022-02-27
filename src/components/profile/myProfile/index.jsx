import React, { useState } from 'react'
import ProfileWalletBar from './profileWalletBar'
import './myProfile.scss'
import ProfileTable from './profileTable'
import ProfileForm from './profileForm'

const MyProfile = ({ relativeList }) => {
    const [subTab, setSubTab] = useState('basicProfile')
    const [displayProfiles, setDisplayProfiles] = useState(true)
    const [profileToEdit, setProfileToEdit] = useState(-1)

    const handleEditProfile = (index) => {
        setProfileToEdit(index)
        setDisplayProfiles(false)
    }
    return (
        <div className="myProfileContainer">
            <div className="subTab">
                <div className={subTab === 'basicProfile' && 'activeSubTab'} onClick={() => setSubTab('basicProfile')}>Basic Profile</div>
                <div className={subTab === 'friendsAndFamily' && 'activeSubTab'} onClick={() => setSubTab('friendsAndFamily')}>Friends and Family Profile</div>
            </div>
            {
                subTab === 'friendsAndFamily' ?
                    displayProfiles ?
                        <div className="">
                            <ProfileWalletBar />
                            <ProfileTable relativeList={relativeList} handleEditProfile={handleEditProfile} />
                            <div className="addNewProfile">
                                <button className='addNewProfileButton' onClick={() => setDisplayProfiles(false)}>+ Add New Profile</button>
                            </div>
                        </div>
                        :
                        <div className="">
                            <div className="formHeader">
                                <i className='backButton' onClick={() => setDisplayProfiles(true)} />
                                {profileToEdit === -1 ? 'Add New profile' : 'Update Profile'}
                            </div>
                            <ProfileForm profile={profileToEdit > -1 ? relativeList[profileToEdit] : null} setProfileToEdit={setProfileToEdit} />
                        </div>
                    : null
            }
        </div>
    )
}

export default MyProfile