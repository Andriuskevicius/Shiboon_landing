import React from 'react'
import './hero.sass'
import ShiIcon from '../../images/ShiIcon'
import BoonIcon from '../../images/BoonIcon'

const arrowDown = <svg width="16" height="60" viewBox="0 0 16 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.29289 59.7071C7.68341 60.0976 8.31658 60.0976 8.7071 59.7071L15.0711 53.3431C15.4616 52.9526 15.4616 52.3195 15.0711 51.9289C14.6805 51.5384 14.0474 51.5384 13.6569 51.9289L8 57.5858L2.34314 51.9289C1.95262 51.5384 1.31945 51.5384 0.92893 51.9289C0.538406 52.3195 0.538405 52.9526 0.92893 53.3431L7.29289 59.7071ZM7 -4.37114e-08L7 59L9 59L9 4.37114e-08L7 -4.37114e-08Z" fill="black"/>
</svg>

const Hero = () => {
  return (
  <div className="heroSection">
    <span className='overlayShiboon'>$HIBOON</span>
    <div className="heroRow">
      <div>
        <span>$HI</span>
        {arrowDown}
        <ShiIcon />
      </div>
      <div>
        <span>meets</span>
        <span style={{ paddingBottom: '50%', textAlign: 'center' }}>The World's First Dual<br/> Meme Coin</span>
      </div>
      <div>
        <span>BOON</span>
        {arrowDown}
        <BoonIcon />
      </div>
    </div>
  </div>
  )
}

export default Hero
