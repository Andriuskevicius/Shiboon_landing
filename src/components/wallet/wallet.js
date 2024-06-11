import React, { useState, useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { ThreeDots } from 'react-loader-spinner'
import './wallet.sass'

const spinner = (
  <ThreeDots
    visible={true}
    height="16"
    width="40"
    color="#000"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
)

const Wallet = ({ closeModal }) => {
  const { wallet, connect, select, wallets } = useWallet()
  const [selected, setSelected] = useState('Phantom')
  const [isConnecting, setIsConnecting] = useState(false)
  const [loading, setLoading] = useState(false)
  const connectText = <span className="connectText connect">Connect {loading ? spinner : null}</span>

  useEffect(() => {
    if (selected) {
      select(selected)
    }
  }, [selected, select])

  const handleConnect = async (selectedWallet) => {
    setLoading(true)
    try {
      console.log('Trying to connect')
      setSelected(selectedWallet)
      setIsConnecting(true)

      // Wait for the state to update
      await new Promise(resolve => setTimeout(resolve, 0))

      // Check if wallet is correctly selected
      if (!wallet || wallet.adapter.name !== selectedWallet) {
        console.error('Wallet not selected properly')
        return
      }

      await connect()
      setLoading(false)
      closeModal()
    } catch (error) {
      setLoading(false)
      console.error('Error connecting wallet:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <div className="walletTable">
      <h3>Connect Wallet</h3>
      <ul>
        {wallets.map((wallet, index) => (
          <li key={index}>
            <button
              onClick={() => handleConnect(wallet.adapter.name)}
              disabled={isConnecting}
            >
              <span>
                <img height={24} src={wallet.adapter.icon} alt={wallet.adapter.name} />
                {wallet.adapter.name}
              </span>
              <span>
                {selected === wallet.adapter.name ? connectText : wallet.adapter.readyState}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p>If you're on mobile, please open this inside your wallet's built-in browser. If you are unable to connect your wallet, you can send the SOL directly to</p>
      <span className='toWallet'>SHBNxvdFjPTXMg2KS2ZfzfejrexdCBcND1jrAjawBQQ</span>
    </div>
  )
}

export default Wallet
