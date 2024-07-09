import React, { useState } from 'react'
import './referrals.sass'
import Popup from 'reactjs-popup'
import { useWallet } from '@solana/wallet-adapter-react'
import Wallet from '../../components/wallet/wallet'
import axios from 'axios'
import { useLocation } from '@reach/router'

const Referrals = () => {
  const [open, setOpen] = useState(false)
  const [changeButton, setChangeButton] = useState(false)
  const closeModal = () => setOpen(false)
  const [code, setCode] = useState()
  const wallet = useWallet()
  const location = useLocation()
  const currentUrl = location.href ? location.href.replace('/referral', '') : ''
  const [reward, setReward] = useState({ referred_reward: 0, referrer_amount: 0, referrer_count: 0, referrer_reward: 0 })

  console.log(currentUrl)

  const handleWallet = async () => {
    console.log('Trying to connect')
    try {
      await wallet.connect()
      setChangeButton(true)
    } catch (error) {
      setOpen(o => !o)
      console.error('Error connecting wallet:', error)
      // Handle error
    }
  }

  const handleStatistics = (wallet) => {
    console.log('getting statistics', wallet)
    const config = {
      method: 'get',
      url: `https://shiboon-backend-44c91a621475.herokuapp.com/referral/summary/${wallet}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios.request(config)
      .then((response) => {
        setReward(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleReferralCreate = async () => {
    if (!wallet.publicKey) {
      handleWallet()
    } else {
      console.log('getting code..')
      const data = JSON.stringify({
        address: wallet.publicKey.toString()
      })

      const config = {
        method: 'post',
        url: 'https://shiboon-backend-44c91a621475.herokuapp.com/referral/code/',
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json'
        },
        data
      }

      axios.request(config)
        .then((response) => {
          const rowCode = response.data.code
          setCode(rowCode)
          handleStatistics(wallet.publicKey.toString())
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
  <div id="referral" className="referralSection">
    <div className="referralInnerWrap">
      <div className="referralRow">
        <h2>Referrals</h2>
        <div className="referralBlocksContainer">
          <h3>Invite friend</h3>
          <p>For each friend that joing and meets the tasks</p>
          <div className="referralInner">
            <span>My referral link code</span>
            <span className='textToCopy'>{ code ? `${currentUrl}/?referral=${code}` : 'Connect wallet to get code'}</span>
            {!changeButton
              ? <button onClick={() => { handleReferralCreate() }} className='connectButton'>Connect Wallet</button>
              : <button onClick={() => { handleReferralCreate() }} className='connectButton'>Get link</button>
            }
          </div>
        </div>
      </div>
    </div>
    <div className="referralOuterWrap">
      <div className='referralInnerWrap2'>
        <h3>Statistics</h3>
        <div style={{ maxWidth: 'calc(50% - 5px)' }} className="referralInner2">
          <span className='large'>{reward.referrer_count > 0 ? reward.referrer_count.toFixed(1) : reward.referrer_count}</span>
          <p>Transactions were made</p>
        </div>
        <div style={{ maxWidth: 'calc(50% - 5px)' }} className="referralInner2">
          <span className='large'>{reward.referrer_amount > 0 ? reward.referrer_amount.toFixed(1) : reward.referrer_amount}</span>
          <p>$SOL spend</p>
        </div>
        <div style={{ maxWidth: '100%' }} className="referralInner2">
          {/* <div className='centerText'><span className='large'>{reward.referrer_reward > 0 ? reward.referrer_reward.toFixed(1) : reward.referrer_reward}</span>(X $SOL)</div> */}
          <div className='centerText'><span className=''>CALCULATING...</span>(X $SOL)</div>
          <p>Your reward</p>
        </div>
      </div>
      <div className='referralInnerWrap3'>
        <h3>Main information $SHBN army</h3>
        <div className='referralWrapIt'>
          <div className="referralInner3">
            <span>Info for generals</span>
            <ul>
              <li>1. Connect your wallet</li>
              <li>2. Generate code</li>
              <li>3. Share code anywhere</li>
              <li>4. Enjoy 5% from your soldiers</li>
            </ul>
            <span className='example'>Example</span>
            <p>Your friend bought $SHBN for 1  $SOL, you received 0.05 $SOL worth of $SHBN</p>
          </div>
          <div className="referralInner3">
            <span>Info for soldiers</span>
            <ul>
              <li>1. Find code somewhere</li>
              <li>2. Buy with referral code</li>
              <li>3. Enjoy extra 3% to $SHBN purchase</li>
            </ul>
            <span className='example'>Example</span>
            <p>You bought 1 $SOL worth of $SHBN by using code, you received 1.03 $SOL worth of $SHBN</p>
          </div>
        </div>
      </div>
    </div>
    <Popup className="modalWrapper" open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <Wallet closeModal={closeModal} />
        </div>
      </Popup>
  </div>
  )
}

export default Referrals
