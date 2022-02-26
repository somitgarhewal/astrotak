import React, { useState } from 'react'
import Header from './header'
import MyProfile from './myProfile'

import './profile.scss'

const Profile = () => {

  const [tab, setTab] = useState('myProfile')

  return (
    <div className='profilePage'>
      <Header />
      <div className="tab">
        <div className={tab === 'myProfile' && 'activeTab'} onClick={()=> setTab('myProfile')}>My Profile</div>
        <div className={tab === 'orderHistory' && 'activeTab'} onClick={()=> setTab('orderHistory')}>Order History</div>
      </div>
      {
        tab === 'myProfile' ? <MyProfile /> : null
      }
     
    </div>
  )
}

export default Profile