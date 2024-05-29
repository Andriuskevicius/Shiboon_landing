import axios from 'axios'

const OMNISEND_API_URL = 'https://api.omnisend.com/v3/contacts'
const OMNISEND_API_KEY = 'your-omnisend-api-key' // Replace with your actual API key

export const subscribeUser = async (email) => {
  try {
    const response = await axios.post(OMNISEND_API_URL, {
      email,
      status: 'subscribed' // Set the subscription status
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': OMNISEND_API_KEY
      }
    })
    return response.data
  } catch (error) {
    console.error('Error subscribing user:', error)
    throw error
  }
}
