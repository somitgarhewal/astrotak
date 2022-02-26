import React from 'react'
import WalletIcon from '../../../../assets/walletIcon.png'
import './profileWalletBar.scss'

const ProfileWalletBar = () => {
    
    const amount = 0

    return (
        <div className='profileWalletBar'>
            <img className='walletIcon' src={WalletIcon} alt='WalletIcon' />
            <div className="profileWalletBalance">
                Wallet Balance: ₹{amount}
            </div>
            <button className='profileAddMoney'>
                Add Money
            </button>
        </div>
    )
}

export default ProfileWalletBar