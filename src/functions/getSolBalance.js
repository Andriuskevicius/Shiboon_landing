// getSolBalance.js

import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js'

const getSolBalance = async (accountPublicKey) => {
  // connection
  const connection = new Connection('https://api.devnet.solana.com')
  if (!accountPublicKey) {
    window.scrollTo(0, 0)
    return alert('Solana wallet is not installed or not connected.')
  }

  try {
    console.log(accountPublicKey)
    const balance = await connection.getBalance(accountPublicKey)
    console.log(`${balance / LAMPORTS_PER_SOL} SOL`)
    return balance / LAMPORTS_PER_SOL
  } catch (error) {
    console.error('Error getting SOL balance:', error)
    return null
  }
}

export default getSolBalance
