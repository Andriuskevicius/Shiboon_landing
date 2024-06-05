import React from 'react'
import './hero.sass'
import ShiIcon from '../../images/ShiIcon'
import BoonIcon from '../../images/BoonIcon'
import { StaticImage } from 'gatsby-plugin-image'
import { useSelector, useDispatch } from 'react-redux'
import { chooseSide } from '../../state/actions/chooseSideActions'

const arrowDown = <svg width="16" height="60" viewBox="0 0 16 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.29289 59.7071C7.68341 60.0976 8.31658 60.0976 8.7071 59.7071L15.0711 53.3431C15.4616 52.9526 15.4616 52.3195 15.0711 51.9289C14.6805 51.5384 14.0474 51.5384 13.6569 51.9289L8 57.5858L2.34314 51.9289C1.95262 51.5384 1.31945 51.5384 0.92893 51.9289C0.538406 52.3195 0.538405 52.9526 0.92893 53.3431L7.29289 59.7071ZM7 -4.37114e-08L7 59L9 59L9 4.37114e-08L7 -4.37114e-08Z" fill="black"/>
</svg>
const arrowDownMobile = <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.29289 29.7071C7.68342 30.0976 8.31658 30.0976 8.70711 29.7071L15.0711 23.3431C15.4616 22.9526 15.4616 22.3195 15.0711 21.9289C14.6805 21.5384 14.0474 21.5384 13.6569 21.9289L8 27.5858L2.34314 21.9289C1.95262 21.5384 1.31946 21.5384 0.928931 21.9289C0.538407 22.3195 0.538407 22.9526 0.928931 23.3431L7.29289 29.7071ZM7 -4.37114e-08L7 29L9 29L9 4.37114e-08L7 -4.37114e-08Z" fill="black"/>
</svg>

const Hero = () => {
  const side = useSelector((state) => state.chooseSide)
  const dispatch = useDispatch()

  return (
  <div className="heroSection">
      <div className="overlayShiboon">
        <div className='textRowText'>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
        </div>
        <div className='textRowText'>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
          <span>$HIBOON</span>
        </div>
      </div>
    {/* <span className='overlayShiboon'>$HIBOON</span> */}
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
    <div className="heroRowMobile">
      <h2>The World's First Dual Meme Coin</h2>
      <span>Which side<br/> do you choose?</span>
      <div className='heroButtonsWrap'>
        <button onClick={() => dispatch(chooseSide(0))} className={side === 0 ? 'active' : null}>SHI</button>
        <button onClick={() => dispatch(chooseSide(1))} className={side === 1 ? 'active' : null}>BOON</button>
      </div>
      <div className='heroArrowssWrap'>
        <span>{side === 0 ? arrowDownMobile : null}</span>
        <span>{side === 1 ? arrowDownMobile : null}</span>
      </div>
      {side === 0
        ? <StaticImage
            src="../../images/ShiImage.png"
            width={250}
            className="storyShiboon"
            placeholder="blurred"
            layout="fixed"
            alt="Shiboon"
          />
        : <StaticImage
            src="../../images/BoonImage.png"
            width={250}
            className="storyShiboon"
            placeholder="blurred"
            layout="fixed"
            alt="Shiboon"
          />
      }
    </div>
  </div>
  )
}

export default Hero
