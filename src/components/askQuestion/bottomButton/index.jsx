import React from 'react'
import './bottomButton.scss'

const BottomButton = ({ category }) => {
  return (
    <div className='bottomButton'>
      <div className='bottomButtonText'>₹ {category?.price} (1 Question on {category?.name})</div>
      <button className='askNow'>Ask Now</button>
    </div>
  )
}

export default BottomButton