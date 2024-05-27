import React from 'react'
import './raid.sass'
import { StaticImage } from 'gatsby-plugin-image'

const Tokenomics = () => {
  return (
  <div className="tokeSection">
    <div className="tokeRow">
      <div className="raidTextBlocksContainer">
        <h1>LEt’s Raid social Network</h1>
        <p>Spread the word and raid social network. Let the laughter ring out as $HI and BOON lead the charge on a riotous raid of epic proportions. JOIN THE ARMY press that RAID SOCIAL button. Let's unleash the $HIBOON meme madness onto the social networks!</p>
        <div className="buttonsWrap">
          <button>Shuffle</button>
          <button style={{ background: 'rgba(239, 255, 130, 1)' }}>Raid social</button>
        </div>
      </div>
      <div className='imageWrapper'>
        <StaticImage
            src="../../images/chat.png"
            height={500}
            className="tokeBoo"
            placeholder="memeraidsFish"
            layout="constrained"
            alt="Shiboon"
          />
      </div>
      <div className="buttonsWrapMobile">
          <button>Shuffle</button>
          <button style={{ background: 'rgba(239, 255, 130, 1)' }}>Raid social</button>
        </div>
    </div>
  </div>
  )
}

export default Tokenomics
