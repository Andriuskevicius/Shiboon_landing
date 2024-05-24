const GetSolPrice = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    const solanaPriceUSD = parseFloat(data.solana.usd)
    return solanaPriceUSD
  } catch (error) {
    console.error('There was a problem fetching the data:', error)
    return null
  }
}

export default GetSolPrice
