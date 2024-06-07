import React, { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { ThreeDots } from 'react-loader-spinner'
import './wallet.sass'

const spinner = <ThreeDots
visible={true}
height="16"
width="40"
color="#000"
radius="9"
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClass=""
/>
const connectText = <span className="connectText">Connect</span>

const Wallet = ({ closeModal }) => {
  const wallet = useWallet()
  const [selected, setSelected] = useState('Phantom')

  const handleConnect = async (selectedWallet) => {
    try {
      setSelected(selectedWallet)
      wallet.select(selected)

      // Wait for a second
      await new Promise(resolve => setTimeout(resolve, 1000))
      wallet.select(selectedWallet)
      await wallet.connect()
      closeModal()
    } catch (error) {
      console.error('Error connecting wallet:', error)
      wallet.select(selectedWallet)
      // Handle error
    }
  }

  return (
    <div className="walletTable">
    <h3>Connect Wallet</h3>
    <ul>
    {wallet
      ? wallet.wallets.map((wallet, index) => (
        <li key={index}>
        <button onClick={() => { handleConnect(wallet.adapter.name) }}>
            <span><img height={24} src={wallet.adapter.icon} />{wallet.adapter.name}</span>
            <span>{selected === wallet.adapter.name ? connectText : wallet.adapter.readyState}</span>
        </button>
        </li>
      ))
      : null}
    </ul>
    <p>if you're on mobile, please open this inside your wallet's built-in browser.</p>
    <p>If you are unable to connect your wallet, you can send the SOL directly to SHBNxvdFjPTXMg2KS2ZfzfejrexdCBcND1jrAjawBQQ</p>
    </div>
  )
}

export default Wallet
