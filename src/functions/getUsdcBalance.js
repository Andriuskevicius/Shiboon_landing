// getSolBalance.js

import { Connection, PublicKey } from '@solana/web3.js'
import * as splToken from '@solana/spl-token'

const getUsdcBalance = async (accountPublicKey) => {
  const tokenMintAddress = '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU'
  const mintPublicKey = new PublicKey(tokenMintAddress)
  // connection
  const connection = new Connection('https://api.devnet.solana.com')
  if (!accountPublicKey) {
    window.scrollTo(0, 0)
    return alert('Solana wallet is not installed or not connected.')
  }

  try {
    console.log(accountPublicKey)
    const fromTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
      connection,
      accountPublicKey,
      mintPublicKey,
      accountPublicKey
    )
    const tokenAccountBalance = await connection.getTokenAccountBalance(fromTokenAccount.address)
    return tokenAccountBalance.value.amount / 1000000
  } catch (error) {
    console.error('Error getting SOL balance:', error)
    return null
  }
}

export default getUsdcBalance
