import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getAllRelatives } from '../../apis'
import Header from './header'
import MyProfile from './myProfile'

import './profile.scss'

const Profile = () => {

  const [tab, setTab] = useState('myProfile')
  const [relativeList, setRelativeList] = useState([])

   useEffect(() => {
    (async () => {
      const result = await axios.get(getAllRelatives, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4ODA5NzY1MTkxIiwiUm9sZXMiOltdLCJleHAiOjE2NzY0NjE0NzEsImlhdCI6MTY0NDkyNTQ3MX0.EVAhZLNeuKd7e7BstsGW5lYEtggbSfLD_aKqGFLpidgL7UHZTBues0MUQR8sqMD1267V4Y_VheBHpxwKWKA3lQ'
        }
      })
      setRelativeList(result?.data?.data?.allRelatives)
      console.log('res', result)
    })();
  }, [])


  return (
    <div className='profilePage'>
      <Header />
      <div className="tab">
        <div className={tab === 'myProfile' && 'activeTab'} onClick={() => setTab('myProfile')}>My Profile</div>
        <div className={tab === 'orderHistory' && 'activeTab'} onClick={() => setTab('orderHistory')}>Order History</div>
      </div>
      {
        tab === 'myProfile' ? <MyProfile relativeList={relativeList}/> : null
      }

    </div>
  )
}

export default Profile