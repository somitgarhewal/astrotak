import React from 'react'
import './walletBar.scss'
const WalletBar = () => {
    const amount = 0
    return (
        <div className='walletBar'>
            <div className="walletBalance">
                Wallet Balance: ₹{amount}
            </div>
            <button className='addMoney'>
                Add Money
            </button>
        </div>
    )
}

export default WalletBar