import axios from 'axios'

const OMNISEND_API_URL = 'https://api.omnisend.com/v3/contacts'
const OMNISEND_API_KEY = '66565e362df1b42c69178f0f-25Wh5T214DSA0KHQMcxh2Qu6lyiJHwofL6KJ1xdxFJSM9kxlw7' // Replace with your actual API key

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
