import React from 'react'
import './roadmap.sass'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { isMobile } from 'react-device-detect'
import { useIntl } from 'gatsby-plugin-intl'

const arrowRightIcon = <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M28.7071 8.70711C29.0976 8.31659 29.0976 7.68342 28.7071 7.2929L22.3431 0.928934C21.9526 0.53841 21.3195 0.53841 20.9289 0.928934C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM-8.74228e-08 9L28 9L28 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"></path> </svg>

const Roadmap = () => {
  const intl = useIntl()
  return (
  <div className="roadSection">
    <div className="roadRow">
      <div className="roadTextBlocksContainer">
        <h1>{intl.formatMessage({ id: 'walkmap' })} <span>2024</span></h1>
        <p>{intl.formatMessage({ id: 'walkmap-text' })}</p>
      </div>
      {isMobile
        ? <StaticImage
            src="../../images/roadmap-boo.jpg"
            className="roadBoo"
            placeholder="memeraidsFish"
            layout="constrained"
            alt="Shiboon"
          />
        : <StaticImage
              src="../../images/roadmap-boo.jpg"
              height={750}
              className="roadBoo"
              placeholder="memeraidsFish"
              layout="constrained"
              alt="Shiboon"
            />}
    </div>
  </div>
  )
}

export default Roadmap
