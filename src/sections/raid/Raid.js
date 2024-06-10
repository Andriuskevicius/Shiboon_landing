import React, { useState } from 'react'
import './raid.sass'
import meme1 from '../../../static/meme-1.jpg'
import meme2 from '../../../static/meme-2.jpg'
import { useIntl } from 'gatsby-plugin-intl'

const Tokenomics = () => {
  const [currentImage, setCurrentImage] = useState(meme1)
  const [loading, setLoading] = useState(false)
  const images = [meme1, meme2]
  const intl = useIntl()

  const shuffleImage = () => {
    setLoading(true)
    console.log('Random')
    const randomIndex = Math.floor(Math.random() * images.length)
    setCurrentImage(images[randomIndex])
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const shareOnTwitter = () => {
    const text = encodeURIComponent('Check out this meme!')
    const url = encodeURIComponent(window.location.href)
    const image = encodeURIComponent(currentImage)
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=SHIBOON&media=${url}${image}`

    window.open(twitterShareUrl, '_blank')
  }

  return (
  <div id="social-meme-raid" className="tokeSection">
    <div className="tokeRow">
      <div className="raidTextBlocksContainer">
        <h1>{intl.formatMessage({ id: 'raid-title' })}</h1>
        <p>{intl.formatMessage({ id: 'raid-desc' })}</p>
        <div className="buttonsWrap">
          <button onClick={shuffleImage}>{intl.formatMessage({ id: 'raid-shuffle' })}</button>
          <button onClick={shareOnTwitter} style={{ background: 'rgba(239, 255, 130, 1)' }}>{intl.formatMessage({ id: 'raid-share' })}</button>
        </div>
      </div>
      <div className='imageWrapper'>
        {loading
          ? 'Shuffling...'
          : <img
            src={currentImage}
            height={500}
            className="memeRaid"
            alt="Shiboon"
          />
          }
      </div>
      <div className="buttonsWrapMobile">
          <button onClick={shuffleImage}>{intl.formatMessage({ id: 'raid-shuffle' })}</button>
          <button onClick={shareOnTwitter} style={{ background: 'rgba(239, 255, 130, 1)' }}>{intl.formatMessage({ id: 'raid-share' })}</button>
        </div>
    </div>
  </div>
  )
}

export default Tokenomics
